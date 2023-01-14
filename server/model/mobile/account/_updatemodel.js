const db = require("../../../connection2");

async function UpdateProfile() {

}

async function UpdatePushNotificationProfile(push_token, push_status, userSecretKey) {

    let result = null;

    try {

        let sql = `
        UPDATE ACCOUNT_USER SET
        Account_Push_Token = ?,
        Account_Push_Status = ?
        WHERE Account_Secret_key = ? LIMIT 1`;

        let query = await db.query2(sql, [push_token, push_status, userSecretKey]);

        console.log("Log Query Update User Push Notification : ", query);

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
        console.log("Syntax Error while Update User Push Notification Profile : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;

}

module.exports = {
    UpdateProfile,
    UpdatePushNotificationProfile
}