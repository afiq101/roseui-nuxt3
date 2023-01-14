import { initial_api_status, response_api_200, response_api_400, response_api_500 } from "~~/server/constant"
import { UpdateUserWakafConfiguration } from "~~/server/model/_usermodel";

export default defineEventHandler(async (event) => {

    let response = initial_api_status;

    let update_field        = null;
    let update_data         = null;
    let update_user_id      = null;
    let update_wakaf_code   = null;

    try {

        let params = await readBody(event);

        update_field    = params.updateField ? params.updateField : "";
        update_data     = params.updateData ? params.updateData : "";
        update_user_id  = params.userId ? params.userId : "";
        update_wakaf_code = params.wakafCode ? params.wakafCode : "";

        if(update_field === "" || update_field === null) {
            response = response_api_400;
            response.message = "Parameter updateField is undefined. Please check your parameter value.";
        } else if(update_data === "" || update_data === null) {
            response = response_api_400;
            response.message = "Parameter updateData is undefined. Please check your parameter value.";
        } else if(update_user_id === "" || update_user_id === null) {
            response = response_api_400;
            response.message = "Parameter userId is undefined. Please check your parameter value.";
        } else if(update_wakaf_code === "" || update_wakaf_code === null) {
            response = response_api_400;
            response.message = "Parameter wakafCode is undefined. Please check your parameter value.";
        } else {
            let hit_api = await UpdateUserWakafConfiguration(update_field, update_data, update_user_id, update_wakaf_code);
            console.log("Log After Hit DB : ", hit_api);

            if(hit_api.status) {
                response = response_api_200;
            } else {
                response = response_api_500;
                response.message = "Something went wrong while updating user wakaf information. Please contact your system administrator";
            }
        }
         
    } catch(e) {
        console.log("Syntax Errro at Controll /api/user/wakaf/updateinformation");
        response = response_api_500;
    }

    return response;
})