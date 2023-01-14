const db = require("../../../connection2");

async function GetUserWallet(accountId) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Wallet_ID,
        Account_ID,
        Credit_Name,
        Credit_Number,
        Credit_Balance,
        Credit_Float_Balance,
        DATE_FORMAT(Credit_Created_Date, '%d-%m-%Y %r') as Credit_Created_Date
        FROM CREDIT_ACCOUNT_USER
        WHERE Account_ID = ?
        LIMIT 1`;

        let query = await db.query2(sql, [accountId]);

        console.log("Log Query Get User Wallet : ", query);

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
        console.log("Syntax Error at Model /mobile/wallet/GetUserWallet");
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

async function GetUserWalletTransaction(accountId, limit) {

    let result = null;
    limit = limit ? limit : 10;

    try {

        let sql = `
        SELECT 
        Wallet_Transaction_ID,
        Account_ID,
        Credit_Trans_Invoice_No,
        Credit_Trans_Name,
        Credit_Trans_Description,
        Credit_Trans_Amount,
        Credit_Trans_Amount_Nett,
        Credit_Trans_BillCode,
        Credit_Trans_Type,
        Credit_Trans_Created_Date as order_date,
        DATE_FORMAT(Credit_Trans_Created_Date, '%d-%m-%Y %r') as Credit_Trans_Created_Date,
        Credit_FPX_Transaction_ID,
        Credit_Trans_Status
        FROM CREDIT_ACCOUNT_USER_TRANSACTION
        WHERE Account_ID = ? 
        ORDER BY order_date DESC
        LIMIT ${limit}`;

        let query = await db.query2(sql, [accountId]);

        console.log("Log Query Get User Wallet Transaction : ", query);

        if(query) {
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
        console.log("Syntax Error at Model GetUserWalletTransaction : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    GetUserWallet,
    GetUserWalletTransaction
}