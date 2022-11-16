const db = require('../connection');

async function ListWalletUser() {

    let result = null;

    try {

        let sql = `
        SELECT 
        accountUsername,
        accountUserFullname,
        ewalletAccountNumber,
        ewalletBalance,
        ewalletBaucerBalance,
        ewalletVerificationCode,
        DATE_FORMAT(ewalletCreatedDate, '%d-%m-%Y %r') as ewalletCreatedDate,
        ewalletStatus
        FROM 
        ewallet e
        INNER JOIN userAccount a ON e.ewalletUserId = a.accountId
        `;

        let query = await db.query(sql);

        console.log("LOG QUERY LIST WALLET USER : ", query);

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
        console.log("Syntax Error at Model ListWalletUser : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;

}

module.exports = {
    ListWalletUser
}