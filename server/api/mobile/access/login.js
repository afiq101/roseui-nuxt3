import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { CreateUserSession, VerifyLoginUser } from "~~/server/model/mobile/account/_loginmodel";
import { create_access_jwt_token, create_refresh_jwt_token, encrypt_password } from "~~/server/toyyibpayconf";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let username = null;
    let password = null;

    try {

        let bodyParams = await readBody(event);

        username = bodyParams.username ? bodyParams.username : "";
        password = bodyParams.password ? bodyParams.password : "";

        if(username === "" || username === null) {
            response = response_api_400;
            response.message = `Undefined parameter username. Please make sure your username is valid.`;
        } else if(password === "" || password === null) {
            response = response_api_400;
            response.message = `Undefined parameter password. Please make sure your password is valid.`;
        } else {

            let hash_password = await encrypt_password(password);
            let log_masuk_akaun = await VerifyLoginUser(username, hash_password);
            console.log("Log Query Log Masuk Akaun : ", log_masuk_akaun);

            if(log_masuk_akaun.status) {

                // ACCOUNT ID 
                let userAccountId = log_masuk_akaun.data.Account_ID;

                //SECRET KEY USER
                let userSecretKey = log_masuk_akaun.data.Account_Secret_key;

                // CREATE JWT TOKEN
                let cipta_access_jwt_token = await create_access_jwt_token(userSecretKey);
                let cipta_refresh_jwt_token = await create_refresh_jwt_token(userSecretKey);

                log_masuk_akaun.data.ACCESS_TOKEN = cipta_access_jwt_token;
                log_masuk_akaun.data.REFRESH_TOKEN = cipta_refresh_jwt_token;

                let cipta_session_akaun = await CreateUserSession(userAccountId, cipta_access_jwt_token, cipta_refresh_jwt_token);
                console.log("Log Query Create User Session : ", cipta_session_akaun);

                response = response_api_200;
                response.body = log_masuk_akaun.data;
            } else {
                response = response_api_forbidden;
                response.message = log_masuk_akaun.message;
            }
        }

    } catch(e) {
        console.log("Syntax Error at /api/mobile/access/login : ", e);
        response = response_api_500;
    }

    return response;
})