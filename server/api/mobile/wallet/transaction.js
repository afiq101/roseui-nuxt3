import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { GetUserWalletTransaction } from "~~/server/model/mobile/wallet";

export default defineEventHandler(async (event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let limit           = null;

    try {

        let params = await readBody(event);

        userSecretKey   = params.userSecretKey ? params.userSecretKey : "";
        limit           = params.limit ? params.limit : 10;

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please make sure you have valid parameter userSecretKey";
        } else {

            let verify_secret_key = await VerifyUserSecretKey(userSecretKey);
            
            if(verify_secret_key.status) {

                let accountID = verify_secret_key.data.Account_ID;

                let fetch_transaction = await GetUserWalletTransaction(accountID, limit);
                console.log("Log Query GetUserWalletTransaction : ", fetch_transaction);

                if(fetch_transaction.status) {

                    response = response_api_200;
                    response.body = fetch_transaction.data;
                    
                } else {
                    response = response_api_500;
                    response.message = "Something Went Wrong. Please contact your system administrator."
                }
            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please make sure that you're login first."
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /wallet/transaction : ", e);
        response = response_api_500;
    }

    return response
})