import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { DisplayReceipt } from "~~/server/model/mobile/payment/receipt";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { VerifyTransactionExist } from "~~/server/model/mobile/wallet/pay";

export default defineEventHandler(async(event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let billInvoiceNo   = null;

    try {

        let params = await readBody(event);
        console.log("REQEUST PARAM : ", params);

        userSecretKey = params.userSecretKey ? params.userSecretKey : "";
        billInvoiceNo = params.billInvoiceNo ? params.billInvoiceNo : "";

        if(userSecretKey === "" || userSecretKey === null) {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } else if(billInvoiceNo === "" || billInvoiceNo === null) {
            response = response_api_400;
            response.message = "Undefined parameter billInvoiceNo. Please check your parameter value.";
        } else {

            let verify_user = await VerifyUserSecretKey(userSecretKey);
            console.log("Log Verify User : ", verify_user);

            if(verify_user.status) {

                let verify_payment = await VerifyTransactionExist(billInvoiceNo);
                console.log("Log Verify Transaction : ", verify_payment);

                if(verify_payment.status) {

                    let get_receipt = await DisplayReceipt(billInvoiceNo);
                    console.log("Log Receipt : ", get_receipt);

                    if(get_receipt.status) {

                        response = response_api_200;
                        response.message = "Receipt successfully generated.";
                        response.body = get_receipt.data;

                    } else {
                        response = response_api_500;
                        response.message = "Something went wrong while get your receipt information. Please contact your system adminstrator."
                    }

                } else {
                    response = response_api_forbidden;
                    response.message = "Your transaction does not exist in our system. Please make sure you have the valid transaction."
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API request. Please contact your system administrator."
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /payment/receipt : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})