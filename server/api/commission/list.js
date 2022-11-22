import { ListAllCommission } from "~~/server/model/_comissionmodel";

export default defineEventHandler(async (event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let limit       = 10;

    try {

        let params = readBody(event);

        let fetch_data = await ListAllCommission();
        console.log('Log Data ListAllCommission() : ', fetch_data);

        if(fetch_data.status) 
        {
            status_code = 200;
            status      = "success";
            message     = "success";
            body        = fetch_data.data;
        } 
        else 
        {
            status_code = 500;
            status      = "Internal Server Error";
            message     = "Something went wrong. Please contact your system administrator";
            body        = [];
        }

    } catch(e) {
        console.log("Syntax Error at Controller /commission/list");
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator.";
        body        = []
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})