const db = require("../../../connection2");

async function GetWakafMembership(accountId, membershipCode) {

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
        Member_ID,
        Wakaf_Configuration_ID,
        Member_Reference_Code,
        Member_Type,
        Member_Level,
        Member_PIC_Name,
        Member_PIC_Email,
        Member_PIC_Address,
        Member_PIC_Phone,
        Member_PIC_Identification,
        Member_Current_Wakaf_Amount,
        DATE_FORMAT(Member_Register_Date, '%d-%m-%Y %r') as Member_Register_Date,
        DATE_FORMAT(Member_Last_Modified, '%d-%m-%Y %r') as Member_Last_Modified,
        Member_Status,
        Member_Recurring,
        Member_Recurring_Amount
        FROM ACCOUNT_USER A LEFT JOIN AWQAF_MEMBERS B
        ON A.Account_ID = B.Account_ID
        WHERE A.Account_Status = 1
        AND A.Account_ID = ? 
        AND Member_Reference_Code = ?
        LIMIT 1
        `;

        let query = await db.query2(sql, [accountId, membershipCode]);
        console.log("Log Query GetWakafMembership() : ", query);

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
        console.log("Syntax Error at GetWakafMembership() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;

}

async function GetBusinessMembership(accountId, membershipCode) {

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
        User_Keahlian_Business_ID,
        User_Keahlian_Reference_Code,
        DATE_FORMAT(User_Keahlian_Register_Date, '%d-%m-%Y %r') as User_Keahlian_Register_Date,
        User_Keahlian_Payment_Fees,
        User_Keahlian_Cum_Amount,
        User_Keahlian_Status,
        User_Keahlian_Recurring_Status,
        User_Keahlian_Recurring_Amount
        FROM ACCOUNT_USER A 
        LEFT JOIN USER_KEAHLIAN_BUSINESS B
        ON A.Account_ID = B.Account_ID
        WHERE A.Account_Status = 1
        AND A.Account_ID = ? 
        AND User_Keahlian_Reference_Code = ?
        LIMIT 1
        `;

        let query = await db.query2(sql, [accountId, membershipCode]);
        console.log("Log Query GetBusinessMembership() : ", query);

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
        console.log("Syntax Error at GetBusinessMembership() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    GetWakafMembership,
    GetBusinessMembership
}