import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { GetUserListTransaction } from "~~/server/model/mobile/transaction/list";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";

export default defineEventHandler(async(event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let limit           = 10;

    try {

        let params      = await readBody(event);
        userSecretKey   = params.userSecretKey ? params.userSecretKey : "";
        limit           = params.limit ? params.limit : 10;

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else {

            let verify_user = await VerifyUserSecretKey(userSecretKey);
            console.log("Log Function Verify User : ", verify_user);

            if(verify_user.status) {

                let account_id = verify_user.data.Account_ID;

                let fetch = await GetUserListTransaction(account_id, limit);
                console.log("Log Function GetUserListTransaction() : ", fetch);

                response = response_api_200;
                response.message = "List Transaction Successfully Fetch.";
                response.body = fetch.data;

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API request. Please make sure you've logged in first.";
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /transaction/list : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})