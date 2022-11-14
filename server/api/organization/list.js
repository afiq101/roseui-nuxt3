import { GetOrganizationList } from "~~/server/model/_organizationmodel";

export default defineEventHandler(async (event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let organization_name   = null;
    let organization_email  = null;
    let organization_status = null;
    let list_limit          = 10;

    try {

        console.log("Request Body Parameters : ", readBody(event));
        let bodyParams = readBody(event);

        organization_name   = bodyParams.organizationName ? bodyParams.organizationName : '';
        organization_email  = bodyParams.organizationEmail ? bodyParams.organizationEmail : '';
        organization_status = bodyParams.organizationStatus ? bodyParams.organizationStatus : '';
        list_limit          = bodyParams.limit ? bodyParams.limit : 10;

        let fetching_data = await GetOrganizationList(organization_name, organization_email, organization_status, list_limit);
        console.log("LOG fetching_data : ", fetching_data);

        if(fetching_data.status) {
            status_code = 200;
            status      = "success";
            message     = "Get Organization List Success";
            body        = fetching_data.data;
        }
        else 
        {
            status_code = 500;
            status      = "Internal Server Error";
            message     = "Something Went Wrong. Please contact your system administrator.";
            body        = []
        }


    } catch(e) {
        console.log("Syntax Error at Controller GetListOrganization : ", e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator";
        body        = []
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})