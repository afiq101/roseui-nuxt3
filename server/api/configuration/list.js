import { ListConfiguration } from "~~/server/model/_configurationmodel";

export default defineEventHandler( async(event) => {

    let bodyParams  = readBody(event);
    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null; 

    try {

        console.log("Request Parameter : ", bodyParams);

        let fetching = await ListConfiguration();
        console.log("Log LisConfiguration() : ", fetching);

        if(fetching.status) 
        {
            status_code = 200;
            status      = "success";
            message     = "success";
            body        = fetching.data; 
        } 
        else
        {
            status_code = 500;
            status      = "Internal Server Error";
            message     = "Something Went Wrong. Please contact your system administrator.";
            body        = [];
        }

    } catch(e) {
        console.log("Syntax Error at Controller /ListConfiguration", e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator."
        body        = []
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})