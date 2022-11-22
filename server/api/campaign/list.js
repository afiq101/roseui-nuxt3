import { ListAllCampaign } from "~~/server/model/_campaignmodel";

export default defineEventHandler(async(event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    try {

        let params = await readBody(event);

        let get_data = await ListAllCampaign();
        console.log('Log ListAllCampaign() : ', get_data);

        if(get_data.status) 
        {
            status_code = 200;
            status      = 'success';
            message     = 'success';
            body        = get_data.data;
        } 
        else 
        {
            status_code = 500;
            status      = 'Internal Server Error';
            message     = 'Something went wrong. Please contact your system administrator.';
            body        = [];
        }

    } catch(e) {
        console.log('Syntax Error at Controller ListAllCampaign() : ', e);
        status_code = 500;
        status      = 'Internal Server Error';
        message     = 'Internal Server Error. Please contact your system administrator';
        body        = [];
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})