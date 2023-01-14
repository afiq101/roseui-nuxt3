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
        wakaf_configurationName as AHLI, 
        wakaf_configurationCode as KOD_AHLI, 
        IF(SUM(wakaf_member_current_amount) IS NULL, 0, SUM(wakaf_member_current_amount)) as TOTAL_SUM_WAKAF,
        IF(COUNT(wakaf_member_id) = 0, 0, COUNT(*)) as TOTAL_AHLI_WAKAF
        FROM wakafConfiguration wc 
        LEFT OUTER JOIN wakafMembership wm ON wc.wakaf_configurationId = wm.wakaf_member_level
        GROUP BY wakaf_configurationName
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

async function ListAllPewakaf(wakaf_code) {

    let result = null;

    try {


        let where_wakaf_code = ``;
        if(wakaf_code) {
            where_wakaf_code = `WHERE wakaf_configurationCode = '${wakaf_code}'`
        }

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
        ${where_wakaf_code}
        ORDER BY wakaf_member_current_amount DESC
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
        billpaymentBillCode as 'Kod Bil',
        CONCAT('RM', FORMAT(billpaymentAmount, 2)) as 'Jumlah Wakaf',
        billpaymentInvoiceNo as 'No. Rujukan',
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