import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { ListAllBusiness } from "~~/server/model/mobile/business/list";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";

export default defineEventHandler(async(event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let businessName    = null; 
    let businessCode    = null;
    let limit           = 10;

    try {

        let params = await readBody(event);

        userSecretKey   = params.userSecretKey ? params.userSecretKey : "";
        businessName    = params.businessName ? params.businessName : "";
        businessCode    = params.businessCode ? params.businessCode : "";
        limit           = params.limit ? params.limit : 10;

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else {

            let verify_user = await VerifyUserSecretKey(userSecretKey);

            if(verify_user.status) {

                let fetch = await ListAllBusiness(limit, businessName, businessCode);
                console.log("Log Function ListAllBusiness() : ", fetch);

                if(fetch.status) {
                    response = response_api_200;
                    response.message = "Get list all business success.";
                    response.body = fetch.data;
                } else {
                    response = response_api_500;
                    response.message = "Something went wrong while fetching list all business. Please contact your system administrator.";
                    response.body = []
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please make sure that you're logged in first.";
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /business/list : ", e);
        response = response_api_500;
    }

    return response;
})