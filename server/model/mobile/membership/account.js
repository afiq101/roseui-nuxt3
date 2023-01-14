const db = require("../../../connection2");


async function VerifyMembership(membershipCode) {

    let result = null;

    try {

        let sql     = `SELECT * FROM KEAHLIAN_BUSINESS WHERE Keahlian_Business_Code = ? AND Keahlian_Status = 1 LIMIT 1`;
        let query   = await db.query2(sql, [membershipCode]);
        
        console.log("Log Query VerifyMembership() : ", query);

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
        console.log("Syntax Error at VerifyMembership() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;

}

async function GetAccountMembership(membershipID, accountID) {

    let result = null;

    try {

        let sql     = `
        SELECT 
        User_Keahlian_Business_ID,
        Keahlian_Business_ID,
        Account_ID,
        User_Keahlian_Reference_Code,
        DATE_FORMAT(User_Keahlian_Register_Date, '%d-%m-%Y %r') as User_Keahlian_Register_Date,
        DATE_FORMAT(User_Keahlian_Date_Modified, '%d-%m-%Y %r') as User_Keahlian_Date_Modified,
        User_Keahlian_Payment_Fees,
        User_Keahlian_Cum_Amount,
        User_Keahlian_Status,
        User_Keahlian_Recurring_Status,
        User_Keahlian_Recurring_Amount
        FROM USER_KEAHLIAN_BUSINESS 
        WHERE Keahlian_Business_ID = ? 
        AND Account_ID = ? 
        AND User_Keahlian_Status = 1 
        LIMIT 1`;
        let query   = await db.query2(sql, [membershipID, accountID]);
        
        console.log("Log Query GetAccountMembership() : ", query);

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
        console.log("Syntax Error at GetAccountMembership() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    VerifyMembership,
    GetAccountMembership
}