const db = require("../../../connection2");

async function GetUserListTransaction(accountId, limit) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Billpayment_ID,
        Billpayment_UserID,
        Billpayment_InstitusiID,
        Billpayment_Name,
        Billpayment_Description,
        Billpayment_TP_BillCode,
        Billpayment_TP_InvoiceNo,
        Billpayment_Invoice_No,
        Billpayment_Amount,
        Billpayment_Type,
        Billpayment_Payor_Name,
        Billpayment_Payor_Email,
        Billpayment_Payor_Phone,
        Billpayment_Created_Date as order_date,
        DATE_FORMAT(Billpayment_Created_Date, '%d-%m-%Y %r') as Billpayment_Created_Date,
        DATE_FORMAT(Billpayment_Transaction_Date, '%d-%m-%Y %r') as Billpayment_Transaction_Date,
        Billpayment_Payment_Channel,
        Billpayment_FPX_Transaction_ID,
        Billpayment_Status,
        Institusi_ID,
        Institusi_Name,
        Institusi_Fullname,
        Institusi_Description,
        Institusi_Email,
        Institusi_Phone,
        Institusi_Image
        FROM BILLPAYMENT B 
        LEFT JOIN INSTITUSI A
        ON B.Billpayment_InstitusiID = A.Institusi_ID
        WHERE Billpayment_UserID = ?
        ORDER BY order_date DESC
        LIMIT ${limit}`;
 
        let query = await db.query2(sql, [accountId]);
        
        console.log("Log Query User GetUserListTransaction() : ", query);

        if(query.length > 0) {
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
        console.log("Syntax Error at GetUserListTransaction() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    GetUserListTransaction
}