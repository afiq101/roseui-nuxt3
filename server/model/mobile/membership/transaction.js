const db = require('../../../connection2');

async function GetListMembershipTransaction(accountId, membershipID, limit) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Billpayment_ID,
        Billpayment_UserID,
        Billpayment_MemberID,
        Billpayment_Name,
        Billpayment_Description,
        Billpayment_TP_InvoiceNo,
        Billpayment_Invoice_No,
        Billpayment_Amount,
        Billpayment_Type,
        Billpayment_Payor_Name,
        Billpayment_Payor_Email,
        Billpayment_Payor_Phone,
        DATE_FORMAT(Billpayment_Created_Date, '%d-%m-%Y %r') as Billpayment_Created_Date,
        DATE_FORMAT(Billpayment_Transaction_Date, '%d-%m-%Y %r') as Billpayment_Transaction_Date,
        Billpayment_Payment_Channel,
        Billpayment_FPX_Transaction_ID,
        Billpayment_Status,
        Keahlian_Business_Trans_BillName,
        Keahlian_Business_Trans_Description,
        Keahlian_Business_Trans_Type
        FROM BILLPAYMENT A
        INNER JOIN KEAHLIAN_BUSINESS_TRANSACTION B ON A.Billpayment_Invoice_No = B.Keahlian_Business_Trans_InvoiceNo
        WHERE Billpayment_UserID = ?
        AND Billpayment_MemberID = ?
        LIMIT ${limit}
        `;

        let query = await db.query2(sql, [accountId, membershipID]);

        console.log("Log Query Get List Membership Transaction : ");

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
        console.log("Syntax Error at model /mobile/membership/transaction.js : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    GetListMembershipTransaction
}