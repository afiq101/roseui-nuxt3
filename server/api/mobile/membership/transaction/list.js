import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { GetListMembershipTransaction } from "~~/server/model/mobile/membership/transaction";
import { VerifyMembership } from "~~/server/model/mobile/membership/verify";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let userSecretKey   = null;
    let memberCode      = null;
    let limit           = null;

    try {

        let params = await readBody(event);
        console.log("LOG REQUEST PARAMS : ", params);

        userSecretKey   = params.userSecretKey ? params.userSecretKey : "";
        memberCode      = params.memberCode ? params.memberCode : "";
        limit           = params.limit ? params.limit : 10;

        if(userSecretKey === null || userSecretKey === "") 
        {
            response = response_api_400;
            response.message = "Parameter userSecretKey is undefined. Please check your parameter value.";
        } 
        else if(memberCode === null || memberCode === "") 
        {
            response = response_api_400;
            response.message = "Parameter memberCode is undefined. Please check your parameter value.";
        } 
        else 
        {
            let verify_user = await VerifyUserSecretKey(userSecretKey);
            console.log("LOG VERIFY USER : ", verify_user);

            if(verify_user.status) {

                // VERIFY MEMBERSHIP CODE
                let verify_membership = await VerifyMembership(memberCode);
                console.log("Log Function Verify Membership : ", verify_membership);

                if(verify_membership.status) {

                    let accountID       = verify_user.data.Account_ID;
                    let membershipID    = verify_membership.data.Keahlian_Business_ID;

                    let get_transaction = await GetListMembershipTransaction(accountID, membershipID, limit);
                    console.log("Log Function GetListMembershipTransction : ", get_transaction);

                    if(get_transaction.status) {

                        response = response_api_200;
                        response.message = "success";
                        response.body = get_transaction.data;

                    } else {
                        response            = response_api_500;
                        response.message    = "Something went wrong. Please contact your system administrator.";
                        response.body       = []
                    }

                } else {
                    response = response_api_forbidden;
                    response.message = "Unable to verify your membership. Please make sure that you have a valid membership code.";
                    response.body = []
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please login or make sure you're using a valid userSecretKey.";
            }
        }

    } catch(e) {
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})