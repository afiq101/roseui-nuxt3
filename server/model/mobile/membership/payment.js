const db = require("../../../connection2");

async function UpdateMembershipPaymentBillCode(billInvoice, billCode) {

    let result = null;

    try {

        let sql = `
        UPDATE KEAHLIAN_BUSINESS_TRANSACTION SET
        Keahlian_Business_Trans_BillCode = ?
        WHERE Keahlian_Business_Trans_InvoiceNo = ?
        LIMIT 1`;

        let query = await db.query2(sql, [billCode, billInvoice]);

        console.log("Log Query UpdateMembershipPaymentBillCode : ", query);

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
        console.log("Syntax Error at UpdateMembershipPaymentBillCode() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    UpdateMembershipPaymentBillCode
}