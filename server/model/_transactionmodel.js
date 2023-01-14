const db = require('../connection')
const db2 = require('../connection2');

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

async function CreateOrganizationWalletTransaction(
    organization_id,
    organization_wallet_id,
    account_id,
    wallet_id,
    org_wallet_trans_invoice_number,
    org_wallet_trans_amount,
    org_wallet_trans_status,
    org_wallet_trans_method,
    org_wallet_trans_flagupdate
) {

    let result = null;

    let rate_type   = '%';
    let rate_value  = 1;

    let charges_fee = 0;
    let amount_nett = 0;

    if(rate_type === '%') {
        charges_fee = ((rate_value/100) * parseFloat(org_wallet_trans_amount));
        amount_nett = parseFloat(org_wallet_trans_amount) - ((rate_value/100) * parseFloat(org_wallet_trans_amount));
    } else if(rate_type === 'RM') {
        charges_fee = rate_value;
        amount_nett = parseFloat(org_wallet_trans_amount) - rate_value;
    } else {
        charges_fee = 0;
        amount_nett = parseFloat(org_wallet_trans_amount);
    }

    try {

        let sql = `
        INSERT INTO CREDIT_ACCOUNT_INSTITUSI_TRANSACTION(
            Institusi_ID,
            Institusi_Wallet_ID,
            Account_ID,
            Wallet_ID,
            Org_Wallet_Trans_Invoice_No,
            Org_Wallet_Trans_Amount,
            Org_Wallet_Amount_Nett,
            Org_Wallet_Charge_Amount,
            Org_Wallet_Charge_Rate,
            Org_Wallet_Trans_Created_Date,
            Org_Wallet_Trans_Date_Modified,
            Org_Wallet_Trans_Status,
            Org_Wallet_Payment_Method,
            Org_Wallet_Payment_Flag
        ) VALUES (
            ?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?
        )`;

        let query = await db2.query2(sql, [
            organization_id,
            organization_wallet_id,
            account_id,
            wallet_id,
            org_wallet_trans_invoice_number,
            parseFloat(org_wallet_trans_amount).toFixed(2),
            amount_nett,
            charges_fee,
            rate_type === '%' ? `${parseFloat(rate_value)}%` : `RM ${parseFloat(rate_value).toFixed(2)}`,
            org_wallet_trans_status,
            org_wallet_trans_method,
            org_wallet_trans_flagupdate
        ]);

        console.log("Log Query Create Wallet Transaction : ", query);

        if(query.insertId) {

            await CreateAdminWalletTransaction(
                1,
                1,
                organization_id,
                organization_wallet_id,
                org_wallet_trans_invoice_number,
                charges_fee,
                org_wallet_trans_status,
                org_wallet_trans_method,
                org_wallet_trans_flagupdate
            );

            result = {
                status: true,
                insertId: query.insertId
            }
        } else {
            result = {
                status: false,
                insertId: null
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/transactionmodel/CreateOrganizationWalletTransaction : ", e);
        result = {
            status: false,
            insertId: null
        }
    }

    return result;
}

async function CreateAdminWalletTransaction(
    admin_id,
    admin_wallet_id,
    from_org_id,
    from_org_wallet_id,
    org_wallet_trans_invoice_number,
    org_wallet_trans_amount,
    org_wallet_trans_status,
    org_wallet_trans_method,
    org_wallet_trans_flagupdate
) {

    let result = null;

    let rate_type   = '--';
    let rate_value  = 0;

    let charges_fee = 0;
    let amount_nett = 0;

    if(rate_type === '%') {
        charges_fee = ((rate_value/100) * parseFloat(org_wallet_trans_amount));
        amount_nett = parseFloat(org_wallet_trans_amount) - ((rate_value/100) * parseFloat(org_wallet_trans_amount));
    } else if(rate_type === 'RM') {
        charges_fee = rate_value;
        amount_nett = parseFloat(org_wallet_trans_amount) - rate_value;
    } else {
        charges_fee = 0;
        amount_nett = parseFloat(org_wallet_trans_amount);
    }

    try {

        let sql = `
        INSERT INTO CREDIT_ACCOUNT_INSTITUSI_TRANSACTION(
            Institusi_ID,
            Institusi_Wallet_ID,
            From_Institusi_ID,
            From_Institusi_Wallet_ID,
            Org_Wallet_Trans_Invoice_No,
            Org_Wallet_Trans_Amount,
            Org_Wallet_Amount_Nett,
            Org_Wallet_Charge_Amount,
            Org_Wallet_Charge_Rate,
            Org_Wallet_Trans_Created_Date,
            Org_Wallet_Trans_Date_Modified,
            Org_Wallet_Trans_Status,
            Org_Wallet_Payment_Method,
            Org_Wallet_Payment_Flag
        ) VALUES (
            ?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?,?
        )`;

        let query = await db2.query2(sql, [
            admin_id,
            admin_wallet_id,
            from_org_id,
            from_org_wallet_id,
            org_wallet_trans_invoice_number,
            parseFloat(org_wallet_trans_amount).toFixed(2),
            amount_nett,
            charges_fee,
            rate_type === '%' ? `${parseFloat(rate_value)}%` : `RM ${parseFloat(rate_value).toFixed(2)}`,
            org_wallet_trans_status,
            org_wallet_trans_method,
            org_wallet_trans_flagupdate
        ]);

        console.log("Log Query Create Wallet Transaction : ", query);

        if(query.insertId) {
            result = {
                status: true,
                insertId: query.insertId
            }
        } else {
            result = {
                status: false,
                insertId: null
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/transactionmodel/CreateOrganizationWalletTransaction : ", e);
        result = {
            status: false,
            insertId: null
        }
    }

    return result;
}

module.exports = {
    getListAllTransaction,
    CreateOrganizationWalletTransaction
}