const db = require("../../../connection2");

async function VerifyUserSecretKey(secret_key) {

    let result = null;

    try {

        let sql = `
        SELECT 
        au.Account_ID,
        Account_Username,
        Account_Fullname,
        Account_Secret_key,
        Account_Email,
        Account_Phone,
        Account_Push_Token,
        Account_Push_Status,
        Wallet_ID,
        Credit_Balance
        FROM ACCOUNT_USER au INNER JOIN CREDIT_ACCOUNT_USER cau 
        ON au.Account_ID = cau.Account_ID
        WHERE Account_Secret_key = ?
        AND Account_Status = 1
        LIMIT 1`;

        let query = await db.query2(sql, [secret_key]);

        console.log("Log Query Verify User Secret Key : ", query);

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
        console.log("Syntax Error at Model /model/mobile/user/auth : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    VerifyUserSecretKey
}