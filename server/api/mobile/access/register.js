import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { CreateUserWalletAccount, GetAccountUser, RegisterAccount, VerifyUser } from "~~/server/model/mobile/account/_registermodel";

export default defineEventHandler(async(event) => {

    let response    = initial_api_status;
    let body        = null;
    
    try {

        let { username, password, email, phone } = await readBody(event);

        if(username === "" || username === null) {
            response = response_api_400;
            response.message = "Undefined parameter username. Please check your parameter value.";
        } else if(password === "" || password === null) {
            response = response_api_400;
            response.message = "Undefined parameter password. Please check your parameter value.";
        } else if(email === "" || email === null) {
            response = response_api_400;
            response.message = "Undefined parameter email. PLease check your parameter value.";
        } else if(phone === "" || phone === null) {
            response = response_api_400;
            response.message = "Undefined parameter phone. Please check your paramter value.";
        } else {

            let semak_akaun_user = await VerifyUser(username, email);
            console.log("Log Query Semak User : ", semak_akaun_user);

            if(semak_akaun_user.status === false) {
                response = response_api_forbidden;
                response.message = "Nama pengguna atau e-mel telah wujud sebagai pengguna. Sila log masuk dengan nama pengguna atau e-mel ini.";
            } else {

                let register_user = await RegisterAccount(username, password, email, phone);
                console.log("Log Query Register User : ", register_user);
    
                if(register_user.status) {

                    let account_id = register_user.data.insertId;
                    console.log("Account ID : ", account_id);

                    let cipta_akaun_kredit = await CreateUserWalletAccount(account_id);
                    console.log("Log Query Create Credit Account : ", cipta_akaun_kredit);

                    let maklumat_pengguna = await GetAccountUser(account_id);
                    console.log("Log Query Maklumat Pengguna : ", maklumat_pengguna);
    
                    // create user wallet;
                    response = response_api_200;
                    response.body = maklumat_pengguna.data;
                    
                } else {
                    response = response_api_500;
                    response.message = "Something went wrong while register your account. Please contact your system administrator."
                }
            }

            
            
        }

    } catch(e) {
        console.log("Syntax Error at Controller /mobile/access/register : ", e);
        response = response_api_500;
    }

    return response;
})