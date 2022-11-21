import { ListWakafConfiguration } from "~~/server/model/_wakafmodel";

export default defineEventHandler(async(event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let wakaf_name   = null;
    let wakaf_code   = null;
    let wakaf_status = null;

    try {

        let params = await readBody(event);
        console.log('Log Request Parameters : ', params);

        wakaf_name = params.wakafName ? params.wakafName : '';
        wakaf_code = params.wakafCode ? params.wakafCode : '';
        wakaf_status = params.wakafStatus ? params.wakafStatus : '';

        let get_data = await ListWakafConfiguration(wakaf_name, wakaf_code, wakaf_status);
        console.log("Log List Wakaf From DB : ", get_data);

        if(get_data.status) 
        {
            status_code = 200;
            status      = "success";
            message     = "message";
            body        = get_data.data;
        } 
        else {
            status_code = 500;
            status      = "Internal Server Error";
            message     = "Database or query problem. Please contact your system administrator.";
            body        = [];
        }

    } catch(e) {
        console.log("Syntax Error at Controller /wakaf/list : ", e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator.";
        body        = []; 
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})