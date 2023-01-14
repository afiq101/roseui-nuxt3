const db = require('../../../connection2');

async function VerifyLoginUser(username, password) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Account_ID,
        Account_Username, 
        Account_Fullname, 
        Account_Secret_key,
        Account_Email, 
        Account_Phone,
        Account_Status
        FROM ACCOUNT_USER
        WHERE 
        Account_Username LIKE ? AND
        Account_Password LIKE ? LIMIT 1`;

        let account_status = null;

        let query = await db.query2(sql, [username, password]);
        console.log("Log Query Login User : ", query);

        if(query) {

            if(query.length > 0) {
                account_status = query[0]["Account_Status"];
                if(account_status === 1) {
                    result = {
                        status: true,
                        message: "Berjaya.",
                        data: query[0]
                    }
                } else {
                    result = {
                        status: false,
                        message: "Akaun ini telah di nyahaktif. Sila hubungi pentadbir sistem anda untuk mengaktifkan semula akaun anda.",
                        data: query[0]
                    }
                }
            } else {
                result = {
                    status: false,
                    message: "Nama pengguna atau kata laluan anda tidak. Silap pastikan anda mempunyai nama pengguna dengan kata laluan yang sah.",
                    data: query[0]
                }
            }

        } else {
            result = {
                status: false,
                message: "Terdapat masalah di pangkalan data anda. Sila hubungi sistem pentadbir anda.",
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/mobile/account/VerifyLoginUser : ", e);
        result = {
            status: false,
            message: "Terdapat masalah di pangkalan data anda. Sila hubungi sistem pentadbir anda.",
            data: []
        }
    }

    return result;

}

async function CreateUserSession(account_id, jwt_access_token, jwt_refresh_token) {

    let result = null;

    try {

        let sql = `
        INSERT INTO MOBILE_APPS_SESSION(
            SESSION_ACCOUNT_ID,
            SESSION_ACCESS_JWT_TOKEN,
            SESSION_REFRESH_JWT_TOKEN,
            SESSION_CREATED_DATE,
            SESSION_DATE_MODIFIED,
            SESSION_STATUS
        ) VALUES (?,?,?,CONVERT_TZ(NOW(), '+00:00', '+08:00'),CONVERT_TZ(NOW(), '+00:00', '+08:00'),1)`;

        let query = await db.query2(sql, [account_id, jwt_access_token, jwt_refresh_token]);

        if(query.insertId) {
            result = {
                status: true,
                message: "Berjaya.",
                data: query.insertId
            }
        } else {
            result = {
                status: false,
                message: "Log masuk akaun tidak berjaya. Sila pastikan nama pengguna dan kata laluan anda sah.",
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/mobile/account/CreateUserSession : ", e);
        result = {
            status: false,
            message: 'Terdapat masalah di pangkalan data. Sila hubungi pentadbir sistem anda',
            data: []
        }
    }

    return result;
}

module.exports = {
    VerifyLoginUser,
    CreateUserSession
}