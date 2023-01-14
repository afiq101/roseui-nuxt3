import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { UpdatePushNotificationProfile } from "~~/server/model/mobile/account/_updatemodel";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";

export default defineEventHandler(async(event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let userPushNotificationToken = null;
    let userPushNotificationStatus = null;

    try {

        let params = await readBody(event);

        userSecretKey = params.userSecretKey ? params.userSecretKey : "";
        userPushNotificationToken = params.userPushNotificationToken ? params.userPushNotificationToken : "";
        userPushNotificationStatus = params.userPushNotificationStatus ? params.userPushNotificationStatus : "";

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else if(userPushNotificationToken === "" || userPushNotificationToken === null) {
            response = response_api_400;
            response.message = "Undefined parameter userPushNotificationToken. Please check your parameter value.";
        } else if(userPushNotificationStatus === "" || userPushNotificationStatus === null) {
            response = response_api_400;
            response.message = "Undefined parameter userPushNotificationStatus. Please check your parameter value.";
        } else {

            let verify_user = await VerifyUserSecretKey(userSecretKey);
            
            if(verify_user.status === true) {
                let update_push = await UpdatePushNotificationProfile(userPushNotificationToken, userPushNotificationStatus, userSecretKey);
                console.log("Log Update UpdatePushNotificationProfile : ", update_push);

                if(update_push.status) {
                    response = response_api_200;
                    response.body = update_push.data;
                } else {
                    response = response_api_500;
                    response.message = "Something Went Wrong. Please contact your system administrator.";
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please make sure that you're logged in first.";
            }
        }

    } catch(e) {
        console.log("Syntax Error At API /mobile/account/pushnotification/update : ", e);
        response = response_api_500;
    }

    return response;
})