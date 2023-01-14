import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { GetUserWallet } from "~~/server/model/mobile/wallet";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let userSecretKey   = null;
    let accountId       = null;

    try {

        let params = await readBody(event);

        userSecretKey = params.userSecretKey ? params.userSecretKey : "";

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else {

            let verify_userSecretKey = await VerifyUserSecretKey(userSecretKey);
            console.log("UserSecretKey Status : ", verify_userSecretKey);

            if(verify_userSecretKey.status) {

                accountId = verify_userSecretKey.data.Account_ID;

                let get_wallet = await GetUserWallet(accountId);
                console.log("Get User Wallet From Model : ", get_wallet);

                if(get_wallet.status) {
                    response = response_api_200;
                    response.body = get_wallet.data
                } else {
                    response = response_api_500;
                    response.body = []
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please check your parameter value.";
            }
        }

    } catch(e) {
        console.log("Syntax Error at API GetUserWallet : ", e);
        response = response_api_500;
    }

    return response;
})