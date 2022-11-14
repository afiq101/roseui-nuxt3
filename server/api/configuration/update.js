import { UpdateConfiguration } from "~~/server/model/_configurationmodel";

export default defineEventHandler(async(event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let configuration_code      = null;
    let configuration_status    = null;

    try {

        console.log("Request Parameter : ", await readBody(event));
        let bodyParams = await readBody(event);

        configuration_code      = bodyParams.configurationCode ? bodyParams.configurationCode : "";
        configuration_status    = bodyParams.configurationStatus ? bodyParams.configurationStatus : "";

        console.log("configuration_code : ", configuration_code);
        console.log("configuration_status : ", configuration_status);
        
        if(configuration_code === "" || configuration_code === null) 
        {
            status_code = 400;
            status      = "Bad Request";
            message     = "Parameter configurationCode is undefined. Please checkyour parameter.";
            body        = []; 
        }
        else if(configuration_status === "" || configuration_status === null) 
        {
            status_code = 400;
            status      = "Bad Request";
            message     = "Parameter configurationCode is undefined. Please checkyour parameter.";
            body        = []; 
        }
        else 
        {
            let updateConfig = await UpdateConfiguration(configuration_code, configuration_status);
            console.log("LOG QUERY UPDATE : ", updateConfig);

            status_code = updateConfig.status ? 200 : 500;
            status      = updateConfig.status ? "success" : "Internal Server Error";
            message     = updateConfig.message;
            body        = [];
        }

    } catch(e) {
        console.log("Syntax Error at Controller /UpdateConfig : ", e);
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