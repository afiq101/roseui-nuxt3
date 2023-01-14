import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { GetAccountMembership, VerifyMembership } from "~~/server/model/mobile/membership/account";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let userSecretKey   = null;
    let membershipCode  = null;


    try {

        let params = await readBody(event);

        userSecretKey  = params.userSecretKey ? params.userSecretKey : "";
        membershipCode = params.membershipCode ? params.membershipCode : "";
        
        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else if(membershipCode === "" || membershipCode === null) {
            response = response_api_400;
            response.message = "Undefined parameter membershipCode. Please check your parameter value.";
        } else {

            let verify_user = await VerifyUserSecretKey(userSecretKey);
            console.log("Log Function Verify User : ", verify_user);

            if(verify_user.status) {

                let accountID = verify_user.data.Account_ID;

                let check_membership_code = await VerifyMembership(membershipCode);
                console.log("Log Function VerifyMembership() : ", check_membership_code);

                if(check_membership_code.status) {

                    let membershipID = check_membership_code.data.Keahlian_Business_ID;

                    let check_if_user_has_membership = await GetAccountMembership(membershipID, accountID);
                    console.log("Log Function GetAccountMembership() : ", check_if_user_has_membership);

                    if(check_if_user_has_membership.status) {

                        let keahlian_bisnes_id              = check_if_user_has_membership.data.User_Keahlian_Business_ID;
                        let keahlian_bisnes_reference_code  = check_if_user_has_membership.data.User_Keahlian_Reference_Code;
                        let keahlian_register_date          = check_if_user_has_membership.data.User_Keahlian_Register_Date;
                        let keahlian_last_modified          = check_if_user_has_membership.data.User_Keahlian_Date_Modified;
                        let keahlian_cum_payment            = check_if_user_has_membership.data.User_Keahlian_Cum_Amount;
                        let keahlian_status                 = check_if_user_has_membership.data.User_Keahlian_Status;
                        let keahlian_recurring_status       = check_if_user_has_membership.data.User_Keahlian_Recurring_Status;
                        let keahlian_recurring_amount       = check_if_user_has_membership.data.User_Keahlian_Recurring_Amount;

                        response = response_api_200;
                        response.message = `Found membership for this account.`;
                        response.body = {
                            keahlian_bisnes_id: keahlian_bisnes_id,
                            keahlian_bisnes_reference_code: keahlian_bisnes_reference_code,
                            keahlian_register_date: keahlian_register_date,
                            keahlian_last_modified: keahlian_last_modified,
                            keahlian_cum_payment: keahlian_cum_payment,
                            keahlian_status: keahlian_status,
                            keahlian_recurring_status: keahlian_recurring_status,
                            keahlian_recurring_amount: keahlian_recurring_amount
                        }

                    } else {
                        response = response_api_500;
                        response.message = "User membership is not found.";
                        response.body = {
                            keahlian_bisnes_id: null,
                            keahlian_bisnes_reference_code: null,
                            keahlian_register_date: null,
                            keahlian_last_modified: null,
                            keahlian_cum_payment: null,
                            keahlian_status: null,
                            keahlian_recurring_status: null,
                            keahlian_recurring_amount: null
                        }
                    }

                } else {
                    response = response_api_forbidden;
                    response.message = "Invalid membership code. Please make sure that you have a valid membership code."
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unathorized API Request. Please contact your system administrator."
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /mobile/membership/account : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})