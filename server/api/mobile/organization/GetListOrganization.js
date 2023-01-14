import { initial_api_status, response_api_200, response_api_500 } from "~~/server/constant"
import { ListOrganization } from "~~/server/model/mobile/organization";

export default defineEventHandler(async(event) => {

    let response            = initial_api_status;
    let organization_name   = "";

    try {

        let params = await readBody(event);
        organization_name = params.organizationName ? params.organizationName : "";

        let fetch_organization_list = await ListOrganization(organization_name);
        console.log("Log Quqery Get Organization List : ", fetch_organization_list);

        if(fetch_organization_list.status) {
            response = response_api_200;
            response.body = fetch_organization_list.data
        } else {
            response = response_api_500;
            response.message = `Something Went Wrong. Please contact your system administrator.`;
            response.body = [];
        }

    } catch(e) {
        console.log("Syntax Error at API GetListOrganization : ", e);
        response = response_api_500;
    }

    return response;

})