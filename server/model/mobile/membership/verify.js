const db = require("../../../connection2");

async function VerifyMembership(membershipCode) {

    let result = null;

    try {

        let sql     = `SELECT * FROM KEAHLIAN_BUSINESS WHERE Keahlian_Business_Code = ? AND Keahlian_Status = 1`;
        let query   = await db.query2(sql, [membershipCode]);
        
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

async function VerifyMembershipTrans(billInvoice) {

    let result = null;

    try {

        let sql = `
        SELECT * FROM BILLPAYMENT A
        INNER JOIN KEAHLIAN_BUSINESS_TRANSACTION B ON A.Billpayment_Invoice_No = B.Keahlian_Business_Trans_InvoiceNo
        WHERE A.Billpayment_Invoice_No = ?
        LIMIT 1`;

        let query = await db.query2(sql, [billInvoice]);

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
        console.log("Syntax Error at VerifyMembershipTrans() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    VerifyMembership,
    VerifyMembershipTrans
}