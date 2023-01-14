const db = require("../../../connection2");

async function DisplayReceipt(billInvoiceNo) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Billpayment_ID,
        Billpayment_UserID,
        Billpayment_InstitusiID,
        Billpayment_MemberID,
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
        Institusi_Image,
        Keahlian_Business_Name,
        Keahlian_Business_Description,
        Keahlian_Business_Code,
        Keahlian_Business_Address,
        Keahlian_Business_Email,
        Keahlian_Business_Phone,
        Keahlian_Business_Image
        FROM BILLPAYMENT B 
        LEFT JOIN INSTITUSI A ON B.Billpayment_InstitusiID = A.Institusi_ID
        LEFT JOIN KEAHLIAN_BUSINESS C ON C.Keahlian_Business_ID = B.Billpayment_MemberID
        WHERE Billpayment_Invoice_No = ?
        LIMIT 1
        `;

        let query = await db.query2(sql, [billInvoiceNo]);
        console.log("Log Query Receipt : ", query);

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
        console.log("Syntax Error at DisplayReceipt() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

async function GenerateCSV() {

}

async function GenerateExcel() {

}

async function GeneratePDF() {

}

module.exports = {
    DisplayReceipt,
    GenerateCSV,
    GenerateExcel,
    GeneratePDF
}