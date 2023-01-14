import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { CheckTransactionExist, UpdatePaymentBillcode, UpdateUserWalletTransBillcode } from "~~/server/model/mobile/payment/billpayment";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { create_bill_fpx, create_bill_topup_fpx } from "~~/server/toyyibpayconf";

export default defineEventHandler(async(event) => {

    let response                    = initial_api_status;
    let billpayment_reference_no    = null;
    let userSecretKey               = null;

    try {

        let params = await readBody(event);
        billpayment_reference_no = params.billInvoiceNo ? params.billInvoiceNo : "";
        userSecretKey = params.userSecretKey ? params.userSecretKey : "";

        if(billpayment_reference_no === "" || billpayment_reference_no === null) 
        {
            response = response_api_400;
            response.message = "Undefined parameter billInvoiceNo. Please check your parameter value.";
        }
        else if(userSecretKey === "" || userSecretKey === null) 
        {
            response = response_api_400;
            response.message = "Undefined parameter userSecretKey. Please check your parameter value.";
        } 
        else {

            // CHECK & VERIFY USER
            let verify_user = await VerifyUserSecretKey(userSecretKey);
            console.log("Log Verify User : ", verify_user);

            if(verify_user.status === false) {
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please make sure that you're logged in first or a verified user.";
            } else {
                // CHECK TRANSACTION EXIST 
                let check_kalau_transaction_wujud = await CheckTransactionExist(billpayment_reference_no);
                console.log("Log Query Check Transaction Wujud : ", check_kalau_transaction_wujud);

                if(check_kalau_transaction_wujud.status) {

                    let bill = check_kalau_transaction_wujud.data;
                    let billName        = bill.Billpayment_Name;
                    let billDescription = bill.Billpayment_Description;
                    let billInvoiceNo   = bill.Billpayment_Invoice_No;
                    let billTo          = bill.Billpayment_Payor_Name;
                    let billEmail       = bill.Billpayment_Payor_Email;
                    let billPhone       = bill.Billpayment_Payor_Phone;
                    let billAmount      = bill.Billpayment_Amount;

                    // CREATE BILL TOYYIBPAY
                    let create_bill_toyyibpay = await create_bill_topup_fpx(billName, billDescription, billTo, billEmail, billPhone, parseFloat(billAmount), billInvoiceNo);
                    console.log("Log Create Bill Toyyibpay : ", create_bill_toyyibpay);

                    if(create_bill_toyyibpay.status === true && create_bill_toyyibpay.billcode) {

                        // UPDATE BILLCODE IN BILLPAYMENT TABLE
                        let update_payment_bill_code = await UpdatePaymentBillcode(billInvoiceNo, create_bill_toyyibpay.billcode);
                        console.log("Log Update Payment BillCode : ", update_payment_bill_code);

                        // UPDATE USER REDIT TRANS BILLCODE IN CREDIT_ACCOUNT_USER_TRANSACTION TABLE
                        let update_credit_trans_bill_code = await UpdateUserWalletTransBillcode(billInvoiceNo, create_bill_toyyibpay.billcode);
                        console.log("Log Update UpdateUserWalletTransBillcode BillCode : ", update_credit_trans_bill_code);

                        response = response_api_200;
                        response.status = "Success";
                        response.message = "Creating your bill success.";
                        response.body = {
                            billCode: create_bill_toyyibpay.billcode,
                            permalink: `https://dev.toyyibpay.com/${create_bill_toyyibpay.billcode}`
                        }
                    } else {
                        response = response_api_500;
                        response.message = `Internal Server Error. Something went wrong went creating your bill. Please contact your system administrator.`;
                    }

                } else {
                    response = response_api_forbidden;
                    response.message = "Unauthorized API call or billpayment is invalid. Please make sure that the billpaymentInvoiceNo is valid."
                }

            }
        }

    } catch(e) {
        console.log("Syntax Error at /api/mobile/payment/pay : ", e);
        response = response_api_500;
    }

    return response;
})