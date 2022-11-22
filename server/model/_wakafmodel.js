const db = require('../connection');

async function ListWakafConfiguration(wakaf_name, wakaf_code, wakaf_status) {

    let result = null;

    try {

        let where_wakaf_name = ``;
        let where_wakaf_code = ``;
        let where_wakaf_status = ``;

        if(wakaf_name) { 
            where_wakaf_name = ` AND wakaf_configurationName LIKE '%${wakaf_name}%'` 
        };

        if(wakaf_code) { 
            where_wakaf_code = ` AND wakaf_configurationName LIKE '%${wakaf_code}%'` 
        };

        if(wakaf_status) { 
            where_wakaf_status = ` AND wakaf_configurationName LIKE '%${wakaf_status}%'` 
        };

        let sql = `
        SELECT
        wakaf_configurationId,
        wakaf_configurationName,
        wakaf_configurationDescription,
        wakaf_configurationCode,
        wakaf_configurationMinAmount,
        wakaf_configurationMaxAmount,
        wakaf_configurationDetail,
        wakaf_configurationImage,
        wakaf_configurationCreatedDate,
        wakaf_configurationLastModified,
        wakaf_configurationStatus
        FROM wakafConfiguration
        WHERE wakaf_configurationId IS NOT NULL
        ${where_wakaf_name}
        ${where_wakaf_code}
        ${where_wakaf_status}`;

        let query = await db.query(sql);

        console.log("Log Query ListWakafConfiguration : ", query);

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
        console.log("Syntax Error at Model ListWakafConfiguration : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function ListAllPewakaf() {

    let result = null;

    try {

        let sql = `
        SELECT 
        accountUsername,
        wakaf_configurationName,
        wakaf_configurationCode,
        wakaf_member_userId,
        wakaf_member_code,
        wakaf_member_type,
        wakaf_member_pic_name,
        wakaf_member_ssm_ic,
        wakaf_member_pic_email,
        wakaf_member_address,
        wakaf_member_description,
        wakaf_member_level,
        wakaf_member_current_amount,
        wakaf_member_status
        FROM wakafMembership wm
        INNER JOIN userAccount a ON wm.wakaf_member_userId = a.accountId
        INNER JOIN wakafConfiguration wc ON wc.wakaf_configurationId = wm.wakaf_member_level
        LIMIT 100`;

        let query = await db.query(sql);

        console.log('Log Query List All Pewakaf : ', query);

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
        console.log('Syntax Error at Model ListAllPewakaf() : ', e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function GetUserTransactionWakaf(userid) {

    let result = null;

    try {

        let sql = `
        SELECT 
        billpaymentId,
        billpaymentBillCode as 'Kod Bil',
        CONCAT('RM', FORMAT(billpaymentAmount, 2)) as 'Jumlah Wakaf',
        billpaymentInvoiceNo as 'Jumlah Wakaf',
        billpaymentTPNumber as 'No. Rujukan toyyibPay',
        billpaymentFPXTransactionId as 'No. Rujukan FPX',
        billpaymentTransactionType as 'Jenis Bayaran',
        organizationName as 'Institusi',
        DATE_FORMAT(billpaymentCreatedDate, '%d-%m-%Y %r') as 'Tarikh Wakaf'
        FROM billpayment bp
        INNER JOIN organization o ON bp.billpaymentOrganizationId = o.organizationId
        WHERE billpaymentUserId = ?
        AND billpaymentStatus = 1
        ORDER BY billpaymentId ASC`;

        let query = await db.query(sql, [userid]);

        console.log('Log Query GetUserTransactionModel : ', query);

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
        console.log("Syntax Error at Model GetUserTransactionWakaf : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListWakafConfiguration,
    ListAllPewakaf,
    GetUserTransactionWakaf
}