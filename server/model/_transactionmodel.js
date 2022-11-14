const db = require('../connection')

async function getListAllTransaction() {

    let result = null;

    try {

        let sql     = `
        SELECT
        organizationName,
        billpaymentInvoiceNo,
        billpaymentAmount,
        billpaymentPayorName,
        billpaymentCreatedDate as datee,
        DATE_FORMAT(billpaymentCreatedDate, '%d/%m/%Y %r') as billpaymentCreatedDate,
        billpaymentStatus
        FROM billpayment bp 
        INNER JOIN organization o ON bp.billpaymentOrganizationId = o.organizationId
        ORDER BY datee DESC
        LIMIT 100`;
        let query   = await db.query(sql);
        
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
        console.log("Syntax Error at Model getListAllTransaction : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    getListAllTransaction
}