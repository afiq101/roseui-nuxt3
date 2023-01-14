const db = require('../connection')

async function ListUser(user_name, user_email, user_phone, user_secret_key, user_status) {

    let result = null;

    try {

        let where_username  = user_name ? ` AND (accountUserName LIKE '%${user_name}%' OR accountUserFullname LIKE '%${user_name}%')` : '';
        let where_useremail = user_email ? ` AND accountUserEmail LIKE '%${user_email}%'` : '';
        let where_userphone = user_phone ? ` AND accountUserContact LIKE '%${user_phone}%'` : '';
        let where_usersecret = user_secret_key ? ` AND accountUserSecretKey LIKE '%${user_secret_key}%'` : '';
        let where_userstatus = user_status ? ` AND accountStatus LIKE '%${user_status}%'` : '';

        let sql = `
        SELECT
        accountUserName as "Nama Pengguna",
        accountUserSecretKey as "Secret Key",
        accountUserFullname as "Nama Penuh",
        accountUserIC as "Kad Pengenalan",
        accountUserEmail as "E-mel",
        accountUserContact as "No. Telefon",
        accountUserAddress as "Alamat",
        accountStatus as Status,
        DATE_FORMAT(accountCreatedDate, '%d-%m-%Y %r') as "Tarikh Daftar",
        accountLHDN as "Akaun LHDN"
        FROM 
        userAccount
        WHERE accountId IS NOT NULL
        ${where_username}
        ${where_useremail}
        ${where_userphone}
        ${where_usersecret}
        ${where_userstatus}
        ORDER BY accountCreatedDate DESC
        LIMIT 100`;

        let query = await db.query(sql);

        console.log("LOG QUERY GetUserList : ", query);

        if(query) {
            result = {
                status: true,
                data: query
            }
        }else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model GetUserList : accountUserEmail", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function GetUserConfigurationWakaf(user_id, wakaf_code) {

    let result = null;

    try {

        let sql     = `
        SELECT 
        accountUserFullname,
        accountUserName,
        wakaf_member_code,
        wakaf_member_type,
        wakaf_member_level,
        DATE_FORMAT(wakaf_member_created_date, '%d-%m-%Y %r') as wakaf_member_created_date,
        wakaf_member_current_amount,
        wakaf_member_status,
        wakaf_member_recurring,
        wakaf_member_recurring_amount
        FROM wakafMembership wm
        INNER JOIN userAccount a ON wm.wakaf_member_userId = a.accountId
        WHERE wakaf_member_userId LIKE ? AND wakaf_member_code LIKE ?`;
        let query   = await db.query(sql, [user_id, wakaf_code]);
        
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
        console.log("Syntax Error at model GetUserConfigurationWakaf() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;

}

async function UpdateUserWakafConfiguration(field, data, user_id, wakaf_code) {

    let result = null;

    try {

        let update_clause = `${field} = ${data}`;
        let sql = `
        UPDATE wakafMembership SET
        ${update_clause}
        WHERE 
        wakaf_member_userId LIKE ?
        AND wakaf_member_code LIKE ?`;

        let query = await db.query(sql, [user_id, wakaf_code]);

        console.log("LOG QUERY UPDATE : ", query);

        if(query) {
            result = {
                status: true,
                data: []
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model UpdateUserWakafConfiguration() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListUser,
    GetUserConfigurationWakaf,
    UpdateUserWakafConfiguration
}