import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { CheckWalletBalance, DeductUserWallet, GetUserWallet, SendPushNotification, TopupAdminWallet, TopupOrganizationWallet, UpdateBillPaymentTrans, UpdateOrganizationWalletTrans, UpdateUserWalletTrans, UpdateWakafAmTransaction, VerifyTransactionExist } from "~~/server/model/mobile/wallet/pay";

export default defineEventHandler(async(event) => {

    let response        = initial_api_status;
    let userSecretKey   = null;
    let billInvoiceNo   = null;

    try {

        let params = await readBody(event);

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

            let account_id          = verify_user.data.Account_ID;
            let account_push_token  = verify_user.data.Account_Push_Token;
            let account_push_status = verify_user.data.Account_Push_Status;

            if(verify_user.status) {

                // CHECK TRANSACTION EXIST 
                let check_kalau_transaction_wujud = await VerifyTransactionExist(billInvoiceNo);
                console.log("Log Query Check Transaction Wujud : ", check_kalau_transaction_wujud);

                if(check_kalau_transaction_wujud.status) {

                    let bill            = check_kalau_transaction_wujud.data;
                    let billName        = bill.Billpayment_Name;
                    let billDescription = bill.Billpayment_Description;
                    let billInvoiceNo   = bill.Billpayment_Invoice_No;
                    let billTo          = bill.Billpayment_Payor_Name;
                    let billEmail       = bill.Billpayment_Payor_Email;
                    let billPhone       = bill.Billpayment_Payor_Phone;
                    let billAmount      = bill.Billpayment_Amount; 
                    let billType        = bill.Billpayment_Type;

                    let organization_id    = bill.Billpayment_InstitusiID;
                    let organization_name  = bill.Institusi_Name;
                    let organization_email = bill.Institusi_Email;
                    let organization_phone = bill.Institusi_Phone; 
                    
                    let bill_type       = bill.Institusi_Bill_Type;

                    let get_user_wallet = await GetUserWallet(account_id);

                    if(get_user_wallet.status) {

                        let wallet_id = get_user_wallet.data.Wallet_ID;
                        let wallet_balance = parseFloat(get_user_wallet.data.Credit_Balance).toFixed(2);

                        let check_balance = await CheckWalletBalance(wallet_balance, parseFloat(billAmount).toFixed(2));
                        
                        if(check_balance.status) {

                            // DEDUCT WALLET BALANCE, UPDATE BILLPAYMENT STATUS, UPDATE USER WALLET TRANS, UPDAE ORGANIZATION WALLET TRANS
                            await DeductUserWallet(wallet_id, billAmount);
                            await UpdateBillPaymentTrans(1, billInvoiceNo);
                            await UpdateUserWalletTrans(1, billInvoiceNo, account_id);
                            await UpdateOrganizationWalletTrans(1, billInvoiceNo);
                            await UpdateWakafAmTransaction(1, billInvoiceNo);

                            let rate_type   = '%';
                            let rate_value  = 1;

                            let charges_fee = 0;
                            let amount_nett = 0;

                            charges_fee = ((rate_value/100) * parseFloat(billAmount));
                            amount_nett = parseFloat(billAmount) - ((rate_value/100) * parseFloat(billAmount));

                            await TopupOrganizationWallet(organization_id, amount_nett);
                            await TopupAdminWallet(1, charges_fee);

                            let title   = `${bill_type} Berjaya`;
                            let body    = `Tahniah! Bayaran wakaf atau sumbangan anda kepada ${organization_name} sebanyak RM ${parseFloat(billAmount).toFixed(2)} telah berjaya.`;
                            await SendPushNotification(title, body, account_push_token);

                            response = response_api_200;
                            response.message = body;
                            response.body = {
                                status: 1,
                                billInvoiceNo: billInvoiceNo
                            }

                        } else {

                            // UPDATE BILLPAYMENT STATUS
                            await UpdateBillPaymentTrans(3, billInvoiceNo);
                            await UpdateUserWalletTrans(3, billInvoiceNo, account_id);
                            await UpdateOrganizationWalletTrans(3, billInvoiceNo);
                            await UpdateWakafAmTransaction(3, billInvoiceNo);

                            let title   = "Baki Kredit Tidak Mencukupi";
                            let body    = `Harap Maaf! Bayaran wakaf atau sumbangan anda kepada ${organization_name} sebanyak RM ${parseFloat(billAmount).toFixed(2)} tidak berjaya.`;
                            await SendPushNotification(title, body, account_push_token);

                            response = response_api_200;
                            response.message = body;
                            response.body = {
                                status: 3,
                                billInvoiceNo: billInvoiceNo
                            }
                        }

                    } else {
                        response = response_api_500;
                        response.message = "Uanble to verify your wallet. Please check your wallet is valid or not.";
                    }

                } else {
                    response = response_api_forbidden;
                    response.message = "Unauthorized API call or billpayment is invalid. Please make sure that the billInvoiceNo is valid."
                }

            } else {
                response = response_api_forbidden;
                response.message = "Unauthorized API request. Please make sure that you're logged in first.";
            }
        }

    } catch(e) {
        console.log("Syntax Error at API /wallet/pay.js : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator.";
    }

    return response;
})