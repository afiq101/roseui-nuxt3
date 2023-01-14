import { initial_api_status, response_api_200, response_api_400, response_api_500, response_api_forbidden } from "~~/server/constant"
import { VerifyCampaign } from "~~/server/model/mobile/kempen/verify";
import { VerifyMembership } from "~~/server/model/mobile/membership/verify";
import { CreateKeahlianBusinessTransaction, CreateKempenTransaction, CreateKreditUserTransaction, CreateMembershipTransaction, CreateTopupTransaction, CreateWakafAmTransaction, CreateWakafTransaction } from "~~/server/model/mobile/payment/billpayment";
import { VerifyUserSecretKey } from "~~/server/model/mobile/user/auth";
import { VerifyOrganizationById } from "~~/server/model/_organizationmodel";
import { CreateOrganizationWalletTransaction } from "~~/server/model/_transactionmodel";
import { create_billpayment_invoice_no, create_topup_reference_no } from "~~/server/toyyibpayconf";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    let userWalletID    = null;
    let userID          = null;
    let membershipCode  = null;
    let campaignCode    = null;
    let memberID        = null;
    let organizationID  = null;
    let organizationWalletID = null;
    let recurringID     = null;
    let autowakafID     = null;

    let billName        = null;
    let billDescription = null;
    let billInvoiceNo   = await create_billpayment_invoice_no();
    let billAmount      = null;
    let billType        = null; // Wakaf | Membership | Topup | Kempen | Transfer | Baucer | Sumbangan
    let billMembersipType = null // Register | Pay

    let billPayorName   = null;
    let billPayorEmail  = null;
    let billPayorPhone  = null;

    let billPaymentChannel      = null; // FPX | Credit & Debit Card | Credit
    let billFPXTransactionID    = null;

    let billStatus      = 4;
    let billFlagUpdate  = 0;
    let billCallback    = null;

    let userSecretKey = null;

    let wakafam_agama       = null;
    let wakafam_untuk_siapa = null;

    try {

        let params = await readBody(event);

        userSecretKey       = params.userSecretKey ? params.userSecretKey : "";
        billName            = params.billName ? params.billName : "";
        billDescription     = params.billDescription ? params.billDescription : "";
        billAmount          = params.billAmount ? parseFloat(params.billAmount) : 0.00;
        billType            = params.billType ? params.billType : "";
        billPaymentChannel  = params.billPaymentChannel ? params.billPaymentChannel : ""; 
        organizationID      = params.organizationId ? params.organizationId : "";

        billPayorName       = params.billPayorName ? params.billPayorName : "";
        billPayorEmail      = params.billPayorEmail ? params.billPayorEmail : "";
        billPayorPhone      = params.billPayorPhone ? params.billPayorPhone : "";

        membershipCode      = params.membershipCode ? params.membershipCode : "";
        billMembersipType   = params.billMembersipType ? params.billMembersipType : "";

        campaignCode        = params.campaignCode ? params.campaignCode : "";

        wakafam_agama       = params.wakafam_agama ? params.wakafam_agama : "";
        wakafam_untuk_siapa = params.wakafam_untuk_siapa ? params.wakafam_untuk_siapa : "";

        if(userSecretKey === "" || userSecretKey === null) 
        {
            response = response_api_400;
            response.message = `Undefined parameter userSecretKey. Please check your parameter value.`;
        } 
        else if(billName === "" || billName === null) 
        {
            response = response_api_400;
            response.message = `Undefined parameter billName. Please check your parameter value.`;
        } 
        else if(billDescription === "" || billDescription === null) 
        {
            response = response_api_400;
            response.message = `Undefined parameter billDescription. Please check your parameter value.`;
        } 
        else if(billAmount === "" || billAmount === null || billAmount === 0.00) {
            response = response_api_400;
            response.message = `Undefined parameter billAmount. Please check your parameter value.`;
        } 
        else if(billType === "" || billType === null) 
        {
            response = response_api_400;
            response.message = `Undefined parameter billType. Please check your parameter value.`;
        } 
        else if(billPaymentChannel === "" || billPaymentChannel === null) 
        {
            response = response_api_400;
            response.message = `Undefined parameter billPaymentChannel. Please check your parameter value.`;
        }
        else if(billPaymentChannel !== "Online Banking" && billPaymentChannel !== "Debit & Credit" && billPaymentChannel !== "Kredit")
        {
            response = response_api_400;
            response.message = `Invalid parameter billPaymentChannel value. Please check your parameter value.`;
        }
        else 
        {

            let checkUserSecretKey = await VerifyUserSecretKey(userSecretKey);
            console.log("Log Function VerifyUserSecretKey() : ", checkUserSecretKey);

            if(checkUserSecretKey.status === false){
                response = response_api_forbidden;
                response.message = "Unauthorized API Request. Please login or contact your system administrator.";
            } else {

                if(userSecretKey) {
                    userWalletID    = checkUserSecretKey.data.Wallet_ID;
                    userID          = checkUserSecretKey.data.Account_ID;
                    billPayorName   = checkUserSecretKey.data.Account_Username;
                    billPayorEmail  = checkUserSecretKey.data.Account_Email;
                    billPayorPhone  = checkUserSecretKey.data.Account_Phone;
                }

                if(billType === "Wakaf") 
                {

                    if(organizationID === "") {
                        response = response_api_400;
                        response.message = "Invalid Organization ID. Please check your parameter value."
                    } else {

                        let semak_institusi = await VerifyOrganizationById(organizationID);
                        console.log("Log Function Semak Institusi : ", semak_institusi);

                        organizationWalletID = semak_institusi.data.Org_Wallet_ID;

                        if(semak_institusi.status) {

                            if(billName === "") {
                                billName = `Bayaran Wakaf RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            if(billDescription === "") {
                                billDescription = `Bayaran Wakaf Sebanyak RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            // CREATE BILLPAYMENT TRANSACTION
                            let cipta_transaksi_wakaf = await CreateWakafTransaction(
                                organizationID,
                                userID,
                                billName,
                                billDescription,
                                billInvoiceNo,
                                parseFloat(billAmount).toFixed(2),
                                billPayorName,
                                billPayorEmail,
                                billPayorPhone,
                                billType,
                                billPaymentChannel,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Loq Function Create Wakaf Transaction : ", cipta_transaksi_wakaf);

                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
                            if(billPaymentChannel === "Kredit") {
                            let create_user_wallet_trans = await CreateKreditUserTransaction(
                                userWalletID,
                                userID,
                                billInvoiceNo,
                                billName,
                                billDescription,
                                parseFloat(billAmount).toFixed(2),
                                billType,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Log Query Create Wallet Trans : ", create_user_wallet_trans);
                            }
                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
        
                            if(cipta_transaksi_wakaf.status) {

                                // CREATE ORGANIZATION WALLET TRANSACTION
                                let cipta_transaksi_wallet_transaction = await CreateOrganizationWalletTransaction(
                                    organizationID,
                                    organizationWalletID,
                                    userID,
                                    userWalletID,
                                    cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                    parseFloat(billAmount).toFixed(2),
                                    billStatus,
                                    billPaymentChannel,
                                    billFlagUpdate
                                );
                                console.log("Log Function Create Wallet Transaction : ", cipta_transaksi_wallet_transaction);
        
                                response = response_api_200;
                                response.message = "Wakaf transaction successfully created.";
                                response.body = {
                                    billPaymentInvoiceNo: cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                    mode: process.env.NODE_ENV
                                }
        
                            } else {
                                response = response_api_500;
                                response.message = "Unable to create your wakaf transaction. Please contact your system administrator.";
                            }
                        } else {
                            response = response_api_500;
                            response.message = `Organization is invalid or not active. Please make sure that the organization is valid and active.`;
                        }
                    }

                }
                else if(billType === "Wakaf Am") {

                    if(wakafam_agama === "" || wakafam_agama === null) {
                        response = response_api_400;
                        response.message = "Undefined parameter wakafam_agama. Please check your parameter value.";
                    } else if(wakafam_untuk_siapa === "" || wakafam_untuk_siapa === null) {
                        response = response_api_400;
                        response.message = "Undefined parameter wakafam_untuk_siapa. Please check your parameter value.";
                    } else {

                        organizationID = 2;
                        let semak_institusi = await VerifyOrganizationById(organizationID);
                        console.log("Log Function Semak Institusi : ", semak_institusi);

                        let jenis_pemberian = "";

                        organizationWalletID = semak_institusi.data.Org_Wallet_ID;
                        jenis_pemberian = wakafam_agama === "Islam" ? "Wakaf" : "Sumbangan";
                        
                        if(billName === "") {
                            billName = `Bayaran ${jenis_pemberian} RM ${parseFloat(billAmount).toFixed(2)}.`;
                        }
    
                        if(billDescription === "") {
                            billDescription = `Bayaran ${jenis_pemberian} Sebanyak RM ${parseFloat(billAmount).toFixed(2)}.`;
                        }

                        // CREATE BILLPAYMENT TRANSACTION
                        let cipta_transaksi_wakaf = await CreateWakafTransaction(
                            organizationID,
                            userID,
                            billName,
                            billDescription,
                            billInvoiceNo,
                            parseFloat(billAmount).toFixed(2),
                            billPayorName,
                            billPayorEmail,
                            billPayorPhone,
                            billType,
                            billPaymentChannel,
                            billStatus,
                            billFlagUpdate
                        );
                        console.log("Loq Function Create Wakaf Transaction : ", cipta_transaksi_wakaf);

                        // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
                        if(billPaymentChannel === "Kredit") {
                        let create_user_wallet_trans = await CreateKreditUserTransaction(
                            userWalletID,
                            userID,
                            billInvoiceNo,
                            billName,
                            billDescription,
                            parseFloat(billAmount).toFixed(2),
                            billType,
                            billStatus,
                            billFlagUpdate
                        );
                        console.log("Log Query Create Wallet Trans : ", create_user_wallet_trans);
                        }
                        // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //

                        if(cipta_transaksi_wakaf.status) {

                            // CREATE USER WAKAF AM TRANSACTION 
                            let cipta_wakaf_am_trans = await CreateWakafAmTransaction(
                                userID,
                                organizationID,
                                userWalletID,
                                billName,
                                billDescription,
                                billInvoiceNo,
                                parseFloat(billAmount).toFixed(2),
                                billStatus,
                                jenis_pemberian,
                                billPaymentChannel,
                                billFlagUpdate,
                                wakafam_agama,
                                wakafam_untuk_siapa
                            );
                            console.log("Log Function Create Wakaf Am Transaction : ", cipta_wakaf_am_trans);

                            // CREATE ORGANIZATION WALLET TRANSACTION
                            let cipta_transaksi_wallet_transaction = await CreateOrganizationWalletTransaction(
                                organizationID,
                                organizationWalletID,
                                userID,
                                userWalletID,
                                cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                parseFloat(billAmount).toFixed(2),
                                billStatus,
                                billPaymentChannel,
                                billFlagUpdate
                            );
                            console.log("Log Function Create Wallet Transaction : ", cipta_transaksi_wallet_transaction);
    
                            response = response_api_200;
                            response.message = "Wakaf Am transaction successfully created.";
                            response.body = {
                                billPaymentInvoiceNo: cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                mode: process.env.NODE_ENV
                            }
    
                        } else {
                            response = response_api_500;
                            response.message = "Unable to create your wakaf transaction. Please contact your system administrator.";
                        }

                    }
                }
                else if(billType === "Sumbangan") 
                {

                    if(organizationID === "") {
                        response = response_api_400;
                        response.message = "Invalid Organization ID. Please check your parameter value."
                    } else {

                        let semak_institusi = await VerifyOrganizationById(organizationID);
                        console.log("Log Function Semak Institusi : ", semak_institusi);

                        organizationWalletID = semak_institusi.data.Org_Wallet_ID;

                        if(semak_institusi.status) {

                            if(billName === "") {
                                billName = `Bayaran Sumbangan RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            if(billDescription === "") {
                                billDescription = `Bayaran Sumbangan Sebanyak RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            // CREATE BILLPAYMENT TRANSACTION
                            let cipta_transaksi_wakaf = await CreateWakafTransaction(
                                organizationID,
                                userID,
                                billName,
                                billDescription,
                                billInvoiceNo,
                                parseFloat(billAmount).toFixed(2),
                                billPayorName,
                                billPayorEmail,
                                billPayorPhone,
                                billType,
                                billPaymentChannel,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Loq Function Create Sumbangan Transaction : ", cipta_transaksi_wakaf);

                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
                            if(billPaymentChannel === "Kredit") {
                            let create_user_wallet_trans = await CreateKreditUserTransaction(
                                userWalletID,
                                userID,
                                billInvoiceNo,
                                billName,
                                billDescription,
                                parseFloat(billAmount).toFixed(2),
                                billType,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Log Query Create Wallet Trans : ", create_user_wallet_trans);
                            }
                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
        
                            if(cipta_transaksi_wakaf.status) {

                                // CREATE ORGANIZATION WALLET TRANSACTION
                                let cipta_transaksi_wallet_transaction = await CreateOrganizationWalletTransaction(
                                    organizationID,
                                    organizationWalletID,
                                    userID,
                                    userWalletID,
                                    cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                    parseFloat(billAmount).toFixed(2),
                                    billStatus,
                                    billPaymentChannel,
                                    billFlagUpdate
                                );
                                console.log("Log Function Create Wallet Transaction : ", cipta_transaksi_wallet_transaction);
        
                                response = response_api_200;
                                response.message = "Wakaf transaction successfully created.";
                                response.body = {
                                    billPaymentInvoiceNo: cipta_transaksi_wakaf.data.Billpayment_Invoice_No
                                }
        
                            } else {
                                response = response_api_500;
                                response.message = "Unable to create your wakaf transaction. Please contact your system administrator.";
                            }
                        } else {
                            response = response_api_500;
                            response.message = `Organization is invalid or not active. Please make sure that the organization is valid and active.`;
                        }
                    }

                }
                else if(billType === "Membership") 
                {
                    if(membershipCode === "" || membershipCode === null) {
                        response = response_api_400;
                        response.message = "Undefined parameter membershipCode. Please check your parameter value.";
                    } 
                    else {

                        let verify_membership = await VerifyMembership(membershipCode);
                        console.log("Log Function verify_membership() : ", verify_membership);

                        if(billMembersipType === "" || billMembersipType === null) {
                            response = response_api_400;
                            response.message = "Undefined parameter billMembersipType. Please check your parameter value.";
                        }
                         else if(verify_membership.status) {

                            let membershipID    = verify_membership.data.Keahlian_Business_ID;
                            let membershipName  = verify_membership.data.Keahlian_Business_Name;
                            let membershipCode  = verify_membership.data.Keahlian_Business_Code;

                            if(billName === "") {
                                billName = `Bayaran Keahlian ${membershipName} RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            if(billDescription === "") {
                                billDescription = `Bayaran Keahlian ${membershipName} Sebanyak RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }

                            // CREATE BILLPAYMENT TRANS
                            let create_membership_transaction = await CreateMembershipTransaction(
                                membershipID,
                                userID,
                                billName,
                                billDescription,
                                billInvoiceNo,
                                billAmount,
                                billPayorName,
                                billPayorEmail,
                                billPayorPhone,
                                billType,
                                billPaymentChannel,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Log Function CreateMembershipTransaction() : ", create_membership_transaction);

                            // CREATE KEAHLIAN_BUSINESS_TRANSACTION TRANS
                            let create_trans_member = await CreateKeahlianBusinessTransaction(
                                membershipID,
                                userID,
                                billName,
                                billDescription,
                                billAmount,
                                billInvoiceNo,
                                billMembersipType,
                                billPayorName,
                                billPayorEmail,
                                billPayorPhone,
                                billPaymentChannel,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Log Function CreateKeahlianBusinessTransaction() : ", create_trans_member);

                            if(create_membership_transaction.status === true && create_trans_member.status === true) {
                                response = response_api_200;
                                response.message = "Membership transacion created successfully.";
                                response.body = {
                                    billPaymentInvoiceNo: billInvoiceNo,
                                    mode: process.env.NODE_ENV
                                }
                            } else {
                                response = response_api_500;
                                response.message = "Unable to create your membership transaction. Please contact your system administrator.";
                                response.body = {
                                    billPaymentInvoiceNo: null,
                                    mode: process.env.NODE_ENV
                                }
                            }

                        } else {
                            response = response_api_forbidden;
                            response.message = "Membership is invalid or your membership is not active. Please choos a valid and active membership.";
                        }
                    }
                } 
                else if(billType === "Kempen") 
                {
                    if(campaignCode === null || campaignCode === "") {
                        response = response_api_400;
                        response.message = "Parameter campaignCode is undefined. Please check your parameter value.";
                    } else {

                        let verify_kempen = await VerifyCampaign(campaignCode);
                        console.log("Log Function Verify Campaing : ", verify_kempen);

                        if(verify_kempen.status) {

                            let KempenID = verify_kempen.kempenID

                            if(billName === "") {
                                billName = `Bayaran Sumbangan Kempen RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            if(billDescription === "") {
                                billDescription = `Bayaran Sumbangan Kempen Sebanyak RM ${parseFloat(billAmount).toFixed(2)}.`;
                            }
        
                            // CREATE BILLPAYMENT TRANSACTION
                            let cipta_transaksi_wakaf = await CreateKempenTransaction(
                                userID,
                                KempenID,
                                billName,
                                billDescription,
                                billInvoiceNo,
                                parseFloat(billAmount).toFixed(2),
                                billPayorName,
                                billPayorEmail,
                                billPayorPhone,
                                billType,
                                billPaymentChannel,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Loq Function Create Wakaf Transaction : ", cipta_transaksi_wakaf);

                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //
                            if(billPaymentChannel === "Kredit") {
                            let create_user_wallet_trans = await CreateKreditUserTransaction(
                                userWalletID,
                                userID,
                                billInvoiceNo,
                                billName,
                                billDescription,
                                parseFloat(billAmount).toFixed(2),
                                billType,
                                billStatus,
                                billFlagUpdate
                            );
                            console.log("Log Query Create Wallet Trans : ", create_user_wallet_trans);
                            }
                            // * * * * * KALAU BAYAR PAKAI WALLET * * * * * //

                            response = response_api_200;
                            response.message = "Kempen transaction successfully created.";
                            response.body = {
                                billPaymentInvoiceNo: cipta_transaksi_wakaf.data.Billpayment_Invoice_No,
                                mode: process.env.NODE_ENV
                            }

                        } else {
                            response = response_api_forbidden;
                            response.message = "Invalid campaign code or your campaign is not active. Please make sure your campaign code is valid and not expired yet."
                        }
                    }
                }
                else if(billType === "Topup") {

                    billInvoiceNo = await create_topup_reference_no();

                    if(billName === "") {
                        billName = `Tambah Nilai Kredit RM ${parseFloat(billAmount).toFixed(2)}.`;
                    }

                    if(billDescription === "") {
                        billDescription = `Bayaran Tambah Nilai Akaun Kredit RM ${parseFloat(billAmount).toFixed(2)}.`;
                    }

                    // MASUKKAN DALAM TABLE BILLPAYMENT UNTUK TRANSACTION TOPUP
                    let cipta_transaksi_topup = await CreateTopupTransaction(
                        userID,
                        billName,
                        billDescription,
                        billInvoiceNo,
                        parseFloat(billAmount).toFixed(2),
                        billPayorName,
                        billPayorEmail,
                        billPayorPhone,
                        billType,
                        billPaymentChannel,
                        billStatus,
                        billFlagUpdate
                    );
                    console.log("Log Function Create Topup Transaction : ", cipta_transaksi_topup);

                    // MASUKKAN DALAM TABLE CREDIT_ACCOUNT_USER_TRANSACTION STATUS 4
                    let cipta_user_wallet_trans = await CreateKreditUserTransaction(
                        userWalletID,
                        userID,
                        billInvoiceNo,
                        billName,
                        billDescription,
                        parseFloat(billAmount).toFixed(2),
                        billType,
                        billStatus,
                        billFlagUpdate
                    );
                    console.log("Log Function Create User Wallet Transaction : ", cipta_user_wallet_trans);

                    // RETURN TOPUP INVOICE NO
                    if(cipta_user_wallet_trans.status === true) {

                        response = response_api_200;
                        response.message = "Topup transaction successfully created.";
                        response.body = {
                            billPaymentInvoiceNo: billInvoiceNo,
                            mode: process.env.NODE_ENV
                        }

                    } else {
                        response = response_api_500;
                        response.message = "Somethin went wrong. Please contact your system administrator.";
                        response.body = cipta_user_wallet_trans.data;
                    }

                }
                else {
                    response = response_api_400;
                    response.message = "Invalid billType value. Please check whether you pass a valid billType."
                }
            }
        }

    } catch(e) {
        console.log("Syntax Error at /api/mobile/payment/createbillpayment : ", e);
        response = response_api_500;
        response.message = "Terdapat masalah di pangkalan data. Sila hubungi pentadbir sistem anda.";
    }

    return response;
})