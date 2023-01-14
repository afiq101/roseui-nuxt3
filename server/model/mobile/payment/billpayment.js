const db = require("../../../connection2");

async function CheckTransactionExist(billPaymentInvoiceNo) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Billpayment_ID,
        Billpayment_Name,
        Billpayment_Description,
        Billpayment_Invoice_No,
        Billpayment_Payor_Name,
        Billpayment_Payor_Email,
        Billpayment_Payor_Phone,
        Billpayment_Amount,
        Billpayment_Type
        FROM BILLPAYMENT 
        WHERE Billpayment_Invoice_No = ?`;
        let query = await db.query2(sql, [billPaymentInvoiceNo]);

        console.log("Query Check Transaction Exist : ", query);

        if(query.length > 0) {
            result = {
                status: true,
                data: query[0]
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/payment/billpayment : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function UpdatePaymentBillcode(billInvoiceNo, billCode) {

    let result = null;

    try {

        let sql     = `
        UPDATE BILLPAYMENT SET 
        Billpayment_TP_BillCode = ?,
        Billpayment_Transaction_Date = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Billpayment_Invoice_No = ? LIMIT 1`;
        let query   = await db.query2(sql, [billCode, billInvoiceNo]);
        
        console.log("Log Query UpdatePaymentBillCode : ", query);

        if(query.affectedRows > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Funtion UpdatePaymentBillcode : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function UpdateWakafAmPaymentBillcode(billInvoiceNo, billCode) {

    let result = null;

    try {

        let sql     = `
        UPDATE WAKAF_AM SET 
        wakafam_toyyibBillCode = ?,
        wakafam_lastModified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE wakafam_billInvoiceNo = ? LIMIT 1`;
        let query   = await db.query2(sql, [billCode, billInvoiceNo]);
        
        console.log("Log Query UpdatePaymentBillCode : ", query);

        if(query.affectedRows > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Funtion UpdatePaymentBillcode : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function UpdateUserWalletTransBillcode(billInvoiceNo, billCode) {

    let result = null;

    try {

        let sql     = `
        UPDATE CREDIT_ACCOUNT_USER_TRANSACTION SET 
        Credit_Trans_BillCode = ?,
        Credit_Trans_Last_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Credit_Trans_Invoice_No = ? 
        LIMIT 1`;
        let query   = await db.query2(sql, [billCode, billInvoiceNo]);
        
        console.log("Log Query UpdateUserWalletTransBillcode : ", query);

        if(query.affectedRows > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Funtion UpdateUserWalletTransBillcode : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function CreateWakafTransaction(
    Organization_ID,
    AccountID,
    BillName,
    BillDescription,
    BillInvoiceNo,
    BillAmount,
    BillPayorName,
    BillPayorEmail,
    BillPayorPhone,
    BillType,
    BillPaymentChannel,
    BillPaymentStatus,
    BillPaymentFlagUpdate
) {
   
    let result = null;

    try {

        let sql = `
        INSERT INTO BILLPAYMENT(
            Billpayment_InstitusiID,
            Billpayment_UserID,
            Billpayment_Name,
            Billpayment_Description,
            Billpayment_Invoice_No,
            Billpayment_Amount,
            Billpayment_Amount_Nett,
            Billpayment_Type,
            Billpayment_Payor_Name,
            Billpayment_Payor_Email,
            Billpayment_Payor_Phone,
            Billpayment_Created_Date,
            Billpayment_Payment_Channel,
            Billpayment_Status,
            Billpayment_Flag
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?)`;

        let query = await db.query2(sql, [
            Organization_ID,
            AccountID,
            BillName,
            BillDescription,
            BillInvoiceNo,
            parseFloat(BillAmount).toFixed(2),
            parseFloat(BillAmount).toFixed(2),
            BillType,
            BillPayorName,
            BillPayorEmail,
            BillPayorPhone,
            BillPaymentChannel,
            BillPaymentStatus,
            BillPaymentFlagUpdate
        ]);

        console.log("Query Create Wakaf Transaction : ", query);

        if(query.insertId) {
            result = {
                status: true,
                data: {
                    Billpayment_ID: query.insertId,
                    Billpayment_Invoice_No: BillInvoiceNo
                }
            }
        } else {
            result = {
                status: false,
                data: {
                    Billpayment_ID: null,
                    Billpayment_Invoice_No: null
                }
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model /model/mobile/payment/CreateWakafTransaction : ", e);
        result = {
            status: false,
            data: {
                Billpayment_ID: null,
                Billpayment_Invoice_No: null
            }
        }
    }

    return result;
}

async function CreateWakafAmTransaction(
    wakafam_accountId,
    wakafam_organizationId,
    wakafam_walletId,
    wakafam_billName,
    wakafam_billDescription,
    wakafam_billInvoiceNo,
    wakafam_amount,
    wakafam_status,
    wakafam_type,
    wakafam_paymentMethod,
    wakafam_flag,
    wakafam_agama,
    wakafam_untuksiapa
) {

    let result = null;

    try {

        let sql = `
        INSERT INTO WAKAF_AM(
            wakafam_accountId,
            wakafam_organizationId,
            wakafam_walletId,
            wakafam_billName,
            wakafam_billDescription,
            wakafam_billInvoiceNo,
            wakafam_amount,
            wakafam_amountNett,
            wakafam_status,
            wakafam_type,
            wakafam_paymentMethod,
            wakafam_createdDate,
            wakafam_lastModified,
            wakafam_flag,
            wakafam_agama,
            wakafam_untuksiapa
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?,CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?)`;

        let query = await db.query2(sql, [
            wakafam_accountId,
            wakafam_organizationId,
            wakafam_walletId,
            wakafam_billName,
            wakafam_billDescription,
            wakafam_billInvoiceNo,
            parseFloat(wakafam_amount).toFixed(2),
            parseFloat(wakafam_amount).toFixed(2),
            wakafam_status,
            wakafam_type,
            wakafam_paymentMethod,
            wakafam_flag,
            wakafam_agama,
            wakafam_untuksiapa
        ]);

        console.log("Log Query WAKAF_AM() : ", query);

        if(query.insertId) { 
            result = {
                status: true,
                data: {
                    billInvoiceNo: wakafam_billInvoiceNo
                }
            }
        } else {
            result = {
                status: false,
                data: {
                    billInvoiceNo: null
                }
            }
        }
         
    } catch(e) {
        console.log("Syntax Error at CreateWakafAmTransaction() : ", e);
        result = {
            status: false,
            data: {
                billInvoiceNo: null
            }
        }
    }

    return result;
}

async function CreateMembershipTransaction(
    membershipId, 
    accountId, 
    BillName,
    BillDescription,
    BillInvoiceNo,
    BillAmount,
    BillPayorName,
    BillPayorEmail,
    BillPayorPhone,
    BillType,
    BillPaymentChannel,
    BillPaymentStatus,
    BillPaymentFlagUpdate
) {

    let result = null;

    try {

        let sql = `
        INSERT INTO BILLPAYMENT
        (
            Billpayment_MemberID,
            Billpayment_UserID,
            Billpayment_Name,
            Billpayment_Description,
            Billpayment_Invoice_No,
            Billpayment_Amount,
            Billpayment_Amount_Nett,
            Billpayment_Payor_Name,
            Billpayment_Payor_Email,
            Billpayment_Payor_Phone,
            Billpayment_Type,
            Billpayment_Created_Date,
            Billpayment_Transaction_Date,
            Billpayment_Payment_Channel,
            Billpayment_Status,
            Billpayment_Flag
        ) VALUES (?,?,?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'), CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?)`;

        let query = await db.query2(sql, [
            membershipId,
            accountId,
            BillName,
            BillDescription,
            BillInvoiceNo,
            BillAmount,
            BillAmount,
            BillPayorName,
            BillPayorEmail,
            BillPayorPhone,
            BillType,
            BillPaymentChannel,
            BillPaymentStatus,
            BillPaymentFlagUpdate
        ]);

        console.log("Query Log CreateMembershipTransaction() : ", query);

        if(query.insertId > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: query
            }
        }

    } catch(e) {
        console.log("Syntax Error at CreateMembershipTransaction() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result
}

async function CreateKeahlianBusinessTransaction(
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
) {

    let result = null;

    try {

        let sql = `
        INSERT INTO KEAHLIAN_BUSINESS_TRANSACTION(
            Account_ID,
            User_Keahlian_Business_ID,
            Keahlian_Business_Trans_BillName,
            Keahlian_Business_Trans_Description,
            Keahlian_Business_Trans_Amount,
            Keahlian_Business_Trans_AmountNett,
            Keahlian_Business_Trans_InvoiceNo,
            Keahlian_Business_Trans_Type,
            Keahlian_Business_Trans_CreatedDate,
            Keahlian_Business_Trans_DateModified,
            Keahlian_Business_Trans_PayorName,
            Keahlian_Business_Trans_PayorEmail,
            Keahlian_Business_Trans_PayorPhone,
            Keahlian_Business_Trans_Flag,
            Keahlian_Business_Status,
            Keahlian_Business_PaymentMethod
        ) VALUES (
            ?,?,?,?,?,?,?,?,CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?,?,?,?
        )`;

        let query = await db.query2(sql, [
            userID,
            membershipID,
            billName,
            billDescription,
            parseFloat(billAmount).toFixed(2),
            parseFloat(billAmount).toFixed(2),
            billInvoiceNo,
            billMembersipType,
            billPayorName,
            billPayorEmail,
            billPayorPhone,
            billFlagUpdate,
            billStatus,
            billPaymentChannel
        ]);

        console.log("Log Query CreateKeahlianBusinessTransaction() : ", query);

        if(query.insertId > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: query
            }
        }

    } catch(e) {
        console.log("Syntax Error at CreateKeahlianBusinessTransaction() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

async function CreateTopupTransaction(
    AccountID,
    BillName,
    BillDescription,
    BillInvoiceNo,
    BillAmount,
    BillPayorName,
    BillPayorEmail,
    BillPayorPhone,
    BillType,
    BillPaymentChannel,
    BillPaymentStatus,
    BillPaymentFlagUpdate
) {
   
    let result = null;

    try {

        let sql = `
        INSERT INTO BILLPAYMENT(
            Billpayment_UserID,
            Billpayment_Name,
            Billpayment_Description,
            Billpayment_Invoice_No,
            Billpayment_Amount,
            Billpayment_Amount_Nett,
            Billpayment_Type,
            Billpayment_Payor_Name,
            Billpayment_Payor_Email,
            Billpayment_Payor_Phone,
            Billpayment_Created_Date,
            Billpayment_Payment_Channel,
            Billpayment_Status,
            Billpayment_Flag
        )
        VALUES(?,?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?)`;

        let query = await db.query2(sql, [
            AccountID,
            BillName,
            BillDescription,
            BillInvoiceNo,
            parseFloat(BillAmount).toFixed(2),
            parseFloat(BillAmount).toFixed(2),
            BillType,
            BillPayorName,
            BillPayorEmail,
            BillPayorPhone,
            BillPaymentChannel,
            BillPaymentStatus,
            BillPaymentFlagUpdate
        ]);

        console.log("Query Create Topup Transaction : ", query);

        if(query.insertId) {
            result = {
                status: true,
                data: {
                    Billpayment_ID: query.insertId,
                    Billpayment_Invoice_No: BillInvoiceNo
                }
            }
        } else {
            result = {
                status: false,
                data: {
                    Billpayment_ID: null,
                    Billpayment_Invoice_No: null
                }
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model /model/mobile/payment/CreateTopupTransaction : ", e);
        result = {
            status: false,
            data: {
                Billpayment_ID: null,
                Billpayment_Invoice_No: null
            }
        }
    }

    return result;
}

async function CreateKreditUserTransaction(
    Wallet_ID,
    Account_ID,
    Credit_Trans_Invoice_No,
    Credit_Trans_Name,
    Credit_Trans_Description,
    Credit_Trans_Amount,
    Credit_Trans_Type,
    Credit_Trans_Status,
    Credit_Trans_Flag
) {

    let result = null;

    try {

        let sql = `
        INSERT INTO CREDIT_ACCOUNT_USER_TRANSACTION(
            Wallet_ID,
            Account_ID,
            Credit_Trans_Invoice_No,
            Credit_Trans_Name,
            Credit_Trans_Description,
            Credit_Trans_Amount,
            Credit_Trans_Amount_Nett,
            Credit_Trans_Type,
            Credit_Trans_Created_Date,
            Credit_Trans_Status,
            Credit_Trans_Flag
        ) VALUES (?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00','+08:00'), ?,?)`;

        let query = await db.query2(sql, [
            Wallet_ID,
            Account_ID,
            Credit_Trans_Invoice_No,
            Credit_Trans_Name,
            Credit_Trans_Description,
            Credit_Trans_Amount,
            Credit_Trans_Amount,
            Credit_Trans_Type,
            Credit_Trans_Status,
            Credit_Trans_Flag
        ]);

        console.log("Query Insert User Wallet Transaction : ", query);

        if(query.insertId) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: query
            }
        }

    } catch(e) {
        console.log("Syntax error at CreateKreditUserTransaction : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

async function CreateBillpaymentTransaction(
    AccountID,
    billName,
    bill
) {

}

async function CreateKempenTransaction(
    AccountID,
    Kempen_ID,
    BillName,
    BillDescription,
    BillInvoiceNo,
    BillAmount,
    BillPayorName,
    BillPayorEmail,
    BillPayorPhone,
    BillType,
    BillPaymentChannel,
    BillPaymentStatus,
    BillPaymentFlagUpdate
) {

    let result = null;

    try {

        let sql = `
        INSERT INTO BILLPAYMENT(
            Billpayment_UserID,
            Billpayment_KempenID,
            Billpayment_Name,
            Billpayment_Description,
            Billpayment_Invoice_No,
            Billpayment_Amount,
            Billpayment_Amount_Nett,
            Billpayment_Type,
            Billpayment_Payor_Name,
            Billpayment_Payor_Email,
            Billpayment_Payor_Phone,
            Billpayment_Created_Date,
            Billpayment_Payment_Channel,
            Billpayment_Status,
            Billpayment_Flag
        )
        VALUES(?,?,?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?)`;

        let query = await db.query2(sql, [
            AccountID,
            Kempen_ID,
            BillName,
            BillDescription,
            BillInvoiceNo,
            parseFloat(BillAmount).toFixed(2),
            parseFloat(BillAmount).toFixed(2),
            BillType,
            BillPayorName,
            BillPayorEmail,
            BillPayorPhone,
            BillPaymentChannel,
            BillPaymentStatus,
            BillPaymentFlagUpdate
        ]);

        console.log("Query Create Kempen Transaction : ", query);

        if(query.insertId) {

            let sql2 = `
            INSERT INTO KEMPEN_TRANSACTION(
                Kempen_ID,
                Account_ID,
                Kempen_Trans_Invoice_No,
                Kempen_Trans_Description,
                Kempen_Trans_Amount,
                Kempen_Trans_Amount_Nett,
                Kempen_Trans_Payor_Name,
                Kempen_Trans_Payor_Email,
                Kempen_Trans_Payor_Phone,
                Kempen_Trans_Created_Date,
                Kempen_Trans_Date_Modified,
                Kempen_Trans_Status,
                Kempen_Trans_Flag_Update
            ) VALUES(?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?)`;

            let query2 = await db.query2(sql2, [
                Kempen_ID,
                AccountID,
                BillInvoiceNo,
                BillDescription,
                parseFloat(BillAmount).toFixed(2),
                parseFloat(BillAmount).toFixed(2),
                BillPayorName,
                BillPayorEmail,
                BillPayorPhone,
                BillPaymentStatus,
                BillPaymentFlagUpdate
            ]);

            console.log("Log Query Create Kempen Transaction 2 : ", query2);

            result = {
                status: true,
                data: {
                    Billpayment_ID: query.insertId,
                    Billpayment_Invoice_No: BillInvoiceNo
                }
            }
        } else {
            result = {
                status: false,
                data: {
                    Billpayment_ID: null,
                    Billpayment_Invoice_No: null
                }
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model /model/mobile/payment/CreateKempenTransaction : ", e);
        result = {
            status: false,
            data: {
                Billpayment_ID: null,
                Billpayment_Invoice_No: null
            }
        }
    }

    return result;

}

async function UpdateKempenBillCode(billInvoiceNo, billCode) {

    let result = null;

    try {

        let sql = `
        UPDATE KEMPEN_TRANSACTION SET
        Kempen_Trans_Bill_Code = ?,
        Kempen_Trans_Date_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Kempen_Trans_Invoice_No = ?
        LIMIT 1`;

        let query = await db.query2(sql, [billCode, billInvoiceNo]);

        console.log("Log Query Update Kempen BillCode : ", query);

        if(query.affectedRows > 0) {
            result = {
                status: true,
                data: query
            }
        } else {
            result = {
                status: false,
                data: query
            }
        }

    } catch(e) {
        console.log("Syntax Error at UpdateKempenBillCode : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    CheckTransactionExist,
    UpdatePaymentBillcode,
    UpdateUserWalletTransBillcode,
    UpdateWakafAmPaymentBillcode,
    CreateWakafTransaction,
    CreateMembershipTransaction,
    CreateKeahlianBusinessTransaction,
    CreateWakafAmTransaction,
    CreateTopupTransaction,
    CreateKreditUserTransaction,
    CreateBillpaymentTransaction,
    CreateKempenTransaction,
    UpdateKempenBillCode
}