const { create_credit_account_no, encrypt_password } = require("~~/server/toyyibpayconf");
const db = require("../../../connection2");


async function VerifyUser(username, email) {
    let result = null;

    try {

        let sql     = `SELECT * FROM ACCOUNT_USER WHERE Account_Username = ? OR Account_Email = ?`;
        let query   = await db.query2(sql, [username, email]);
        
        if(query.length) {
            result = {
                status: false,
                data: query
            }
        } else {
            result = {
                status: true,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/mobile/account/VerifyUser : ", e);
        result = {
            status: false,
            data: []
        }
    }   

    return result;
}

async function RegisterAccount(username, password, email, phone) {

    let result = null;
    let hashing_password = await encrypt_password(password);

    try {

        let sql = `
        INSERT INTO ACCOUNT_USER(
            Account_Username, 
            Account_Fullname, 
            Account_Password, 
            Account_Secret_key,
            Account_Email, 
            Account_Phone, 
            Account_Date_Created, 
            Account_Status
        ) VALUES (?,?,?,UUID(),?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'), 1)`;

        let query = await db.query2(sql, [username, username, hashing_password, email, phone]);

        console.log("Log Query Register User Mobile Apps : ", query);

        if(query) {
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
        console.log("Syntax Error at /model/mobile/account : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function CreateUserWalletAccount(AccountID) {

    let result = null;

    try {

        let wallet_account_number   = await create_credit_account_no();
        let wallet_balance          = 0.00;
        let wallet_float            = 0.00;

        let sql = `
        INSERT INTO CREDIT_ACCOUNT_USER(
            Account_ID,
            Credit_Name,
            Credit_Number,
            Credit_Balance,
            Credit_Float_Balance,
            Credit_Created_Date,
            Credit_Last_Modified,
            Credit_Status
        ) VALUES (?,?,?,?,?,CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?)`;

        let query = await db.query2(sql,[
            AccountID, 
            `Akaun Kredit ${wallet_account_number}`,
            wallet_account_number,
            wallet_balance,
            wallet_float,
            1
        ]);

        console.log("Log Query CreateUserWalletAccount : ", query);

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
        console.log("Syntax Error at /model/mobile/account/CreateUserWalletAccount : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function GetAccountUser(AccountID) {

    let result = null;
    
    try {

        let sql = `
        SELECT 
        Account_ID, 
        Account_Username, 
        Account_Fullname, 
        Account_Email, 
        Account_Phone, 
        Account_Status
        FROM ACCOUNT_USER WHERE Account_ID LIKE ? LIMIT 1`;

        let query = await db.query2(sql, [AccountID]);

        console.log("Log Query GetAccountUser : ", query);

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
        console.log("Syntax Error at /model/mobile/account/GetAccount : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    VerifyUser,
    RegisterAccount,
    CreateUserWalletAccount,
    GetAccountUser
}