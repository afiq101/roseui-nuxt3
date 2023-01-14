import { initial_api_status, response_api_200, response_api_500 } from "~~/server/constant"
import { GetUserConfigurationWakaf } from "~~/server/model/_usermodel";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let user_id     = null;
    let wakaf_code  = null;

    try {

        let params = await readBody(event);

        user_id     = params.userId ? params.userId : "";
        wakaf_code  = params.wakafCode ? params.wakafCode : "";
        
        if(user_id === "" || user_id === null) 
        {
            response.status_code = 400;
            response.status      = "Bad Request";
            response.message     = "Parameter userId is undefined. Please check your parameter.";
            response.body        = []
        } 
        else if(wakaf_code === "" || wakaf_code === null) 
        {
            response.status_code = 400;
            response.status      = "Bad Request";
            response.message     = "Parameter wakafCode is undefined. Please check your parameter.";
            response.body        = []
        } 
        else 
        {
            let hit = await GetUserConfigurationWakaf(user_id, wakaf_code);
            console.log("Log Model GetUserConfigurationWakaf() : ", hit);

            if(hit.status) {
                response = response_api_200;
                response.body = hit.data;
            } else {
                response = response_api_500;
                response.message = "Something went wrong while getting your data. Please contact your system administrator";
            }
        }

    } catch(e) {
        console.log("Syntax Error at Controller /api/user/wakaf/information", e);
        response = response_api_500;
    }

    return response;
})