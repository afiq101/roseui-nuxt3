const { default: axios } = require("axios");
const db = require("../../../connection2");

async function VerifyTransactionExist(billPaymentInvoiceNo) {
    let result = null;

    try {

        let sql = `
        SELECT 
        Billpayment_ID,
        Billpayment_InstitusiID,
        Billpayment_Name,
        Billpayment_Description,
        Billpayment_Invoice_No,
        Billpayment_Payor_Name,
        Billpayment_Payor_Email,
        Billpayment_Payor_Phone,
        Billpayment_Amount,
        Billpayment_Type,
        Institusi_Name,
        Institusi_Email,
        Institusi_Phone,
        Institusi_Bill_Type
        FROM BILLPAYMENT BP 
        LEFT JOIN INSTITUSI I ON BP.Billpayment_InstitusiID = I.Institusi_ID
        WHERE Billpayment_Invoice_No = ?
        `;
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
        console.log("Syntax Error at /model/wallet/pay.js : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function GetUserWallet(accountId) {
    let result = null;
    try {

        let sql = `
        SELECT 
        A.Account_ID,
        Account_Username,
        Account_Fullname,
        Account_Secret_key,
        Account_Email,
        Account_Phone,
        Account_Push_Token,
        Account_Push_Status,
        Wallet_ID,
        Credit_Name,
        Credit_Number,
        Credit_Balance
        FROM ACCOUNT_USER A 
        INNER JOIN CREDIT_ACCOUNT_USER B ON A.Account_ID = B.Account_ID
        WHERE A.Account_ID = ? LIMIT 1`;

        let query = await db.query2(sql, [accountId]);

        console.log("Log Query GetUserWallet() : ", query);

        if(query.length > 0) {
            result = {
                status: true,
                data: query[0]
            }
        } else {
            result = {
                status: false,
                data: {}
            }
        }
    } catch(e) { 
        console.log("Syntax Error at GetUserWallet() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

async function CheckWalletBalance(balance, amount) {
    if(parseFloat(balance) > parseFloat(amount)) {
        return { status: true }
    } else {
        return { status: false }
    }
}

async function DeductUserWallet(walletId, amount) {
    let result = null;
    try {
        let sql = `
        UPDATE CREDIT_ACCOUNT_USER SET
        Credit_Balance = Credit_Balance - ${parseFloat(amount).toFixed(2)},
        Credit_Last_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Wallet_ID = ?
        `;

        let query = await db.query2(sql, [walletId]);
        console.log("Log Query DeductUserWallet : ", query);

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
        console.log("Syntax Error at DeductUserWallet() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
}

async function UpdateBillPaymentTrans(status, billInvoiceNo) {
    let result = {};

    try {
        let sql = `
        UPDATE BILLPAYMENT SET
        Billpayment_Status = ?,
        Billpayment_Flag = 1
        WHERE 
        Billpayment_Invoice_No = ? LIMIT 1`;

        let query = await db.query2(sql, [status, billInvoiceNo]);

        console.log("Log Query UpdateBillPaymentTrans() : ", query);

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
        console.log("Syntax Error at UpdateBillPaymentTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function UpdateUserWalletTrans(status, billInvoiceNo, accountId) {
    let result = {};
    try {
        let sql = `
        UPDATE CREDIT_ACCOUNT_USER_TRANSACTION SET 
        Credit_Trans_Status = ?,
        Credit_Trans_Last_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00'),
        Credit_Trans_Flag = 1
        WHERE Credit_Trans_Invoice_No = ?
        AND Account_ID = ? LIMIT 1`;

        let query = await db.query2(sql, [status, billInvoiceNo, accountId]);
        console.log("Log Query UpdateUserWalletTrans() : ", query);

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
        console.log("Syntax Error at UpdateUserWalletTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function UpdateWakafAmTransaction(status, billInvoiceNo) {

    let result = null;

    try {

        let sql = `
        UPDATE WAKAF_AM SET
        wakafam_status = ?,
        wakafam_flag = 1
        WHERE wakafam_billInvoiceNo = ?
        LIMIT 1`;

        let query = await db.query2(sql, [status, billInvoiceNo]);
        console.log("Log Query UpdateWakafAmTransaction() : ", query);

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
        console.log("Syntax Error at UpdateWakafAmTransaction() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function UpdateOrganizationWalletTrans(status, billInvoiceNo) {
    let result = {};
    try {
        let sql = `
        UPDATE CREDIT_ACCOUNT_INSTITUSI_TRANSACTION SET 
        Org_Wallet_Trans_Status = ?,
        Org_Wallet_Trans_Date_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00'),
        Org_Wallet_Payment_Flag = 1
        WHERE Org_Wallet_Trans_Invoice_No = ? LIMIT 5`;

        let query = await db.query2(sql, [status, billInvoiceNo]);
        console.log("Log Query UpdateOrganizationWalletTrans() : ", query);

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
        console.log("Syntax Error at UpdateOrganizationWalletTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function TopupOrganizationWallet(organizationId, amount) {
    let result = {};
    try {

        let sql = `
        UPDATE CREDIT_ACCOUNT_INSTITUSI SET
        Org_Credit_Balance = Org_Credit_Balance + ${parseFloat(amount).toFixed(2)},
        Org_Credit_Last_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Institusi_ID = ? LIMIT 1
        `;

        let query = await db.query2(sql, [organizationId]);

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
        console.log("Syntax Error at UpdateBillPaymentTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function TopupAdminWallet(organizationId, amount) {
    let result = {};
    try {

        let sql = `
        UPDATE CREDIT_ACCOUNT_INSTITUSI SET
        Org_Credit_Balance = Org_Credit_Balance + ${parseFloat(amount).toFixed(2)},
        Org_Credit_Last_Modified = CONVERT_TZ(NOW(), '+00:00', '+08:00')
        WHERE Institusi_ID = ? LIMIT 1
        `;

        let query = await db.query2(sql, [organizationId]);

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
        console.log("Syntax Error at UpdateBillPaymentTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }
    return result;
}

async function SendPushNotification(title, body, token) {

    //var axios = require('axios');
    var data = JSON.stringify({
    "app_id": "d36d2d23-0c61-44b1-9d44-5803c6f541ce",
    "include_ios_tokens": [ token ],
    "include_android_reg_ids": [ token ],
    "data": {
        "route": "Receipt"
    },
    "contents": {
        "en": body
    }
    });

    var config = {
        method: 'post',
        url: 'https://onesignal.com/api/v1/notifications',
        headers: { 
            'Authorization': 'Basic MjczNDQ1NTgtYzk0NC00OTE1LWE2N2EtYTFiMDIxYzNkNzg5', 
            'Content-Type': 'application/json'
        },
        data : data
    };

    await axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });

    return;
}

async function SendEmailNotification(title, body, receiver) {

}

module.exports = {
    VerifyTransactionExist,
    GetUserWallet,
    CheckWalletBalance,
    DeductUserWallet,
    UpdateBillPaymentTrans,
    UpdateUserWalletTrans,
    UpdateWakafAmTransaction,
    UpdateOrganizationWalletTrans,
    TopupOrganizationWallet,
    TopupAdminWallet,
    SendPushNotification,
    SendEmailNotification
}