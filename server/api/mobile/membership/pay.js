import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { VerifyMembershipTrans } from "~~/server/model/mobile/membership/verify";
import { UpdatePaymentBillcode } from "~~/server/model/mobile/payment/billpayment";
import { UpdateMembershipPaymentBillCode } from "~~/server/model/mobile/membership/payment"
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { create_bill_fpx } from "~~/server/toyyibpayconf";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let userSecretKey   = null;
    let billInvoiceNo   = null;
    
    try {

        let params = await readBody(event);
        billInvoiceNo   = params.billInvoiceNo ? params.billInvoiceNo : "";
        userSecretKey   = params.userSecretKey ? params.userSecretKey : "";

        if(billInvoiceNo === "" || billInvoiceNo === null) 
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
            } 
            else { 

                // VERIFY MEMBERSHIP TRANSACTION 
                let verify_membership_trans = await VerifyMembershipTrans(billInvoiceNo);
                console.log("Log Function VerifyMembershipTrans() : ", verify_membership_trans);

                if(verify_membership_trans.status) {

                    let bill            = verify_membership_trans.data;
                    let billName        = bill.Billpayment_Name;
                    let billDescription = bill.Billpayment_Description;
                    let billInvoiceNo   = bill.Billpayment_Invoice_No;
                    let billTo          = bill.Billpayment_Payor_Name;
                    let billEmail       = bill.Billpayment_Payor_Email;
                    let billPhone       = bill.Billpayment_Payor_Phone;
                    let billAmount      = bill.Billpayment_Amount;
                    let billType        = bill.Billpayment_Type; // Membership

                    // CREATE BILL TOYYIBPAY
                    let create_bill_toyyibpay = await create_bill_fpx(billName, billDescription, billTo, billEmail, billPhone, parseFloat(billAmount), billInvoiceNo);
                    console.log("Log Create Bill Toyyibpay : ", create_bill_toyyibpay);

                    if(create_bill_toyyibpay.status === true && create_bill_toyyibpay.billcode) {

                        // UPDATE BILLCODE IN BILLPAYMENT TABLE
                        let update_payment_bill_code = await UpdatePaymentBillcode(billInvoiceNo, create_bill_toyyibpay.billcode);
                        console.log("Log Update Payment BillCode : ", update_payment_bill_code);

                        // UPDATE BILLCODE IN KEAHLIAN_BUSINESS_TRANSACTION TABLE
                        if(billType === "Membership") {
                            let update_payment_billcode = await UpdateMembershipPaymentBillCode(billInvoiceNo, create_bill_toyyibpay.billcode);
                            console.log("Log Update Wakaf Am Payment BillCode : ", update_payment_billcode);
                        }

                        response            = response_api_200;
                        response.status     = "Success";
                        response.message    = "Creating your bill success.";
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
                    response.message = "Unable to verify membership transaction. Please make sure that you have a valid membership transaction."
                }

            }

        }

    } catch(e) {
        console.log("Syntax Error at API /mobile/membership/pay : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})