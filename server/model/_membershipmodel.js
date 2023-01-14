const db = require('../connection')

async function ListAllMembership(membership_code) {

    let result = null;

    try {

        let where_membership_code = ``;
        if(membership_code) where_membership_code = `WHERE membership_code = '${membership_code}'`;

        let sql = `
        SELECT * FROM membership ${where_membership_code} LIMIT 100`;
        console.log("SQL : ", sql);

        let query = await db.query(sql);

        console.log("Log Query ListAllMembership() : ", query);

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
        console.log("Syntax Error at Model ListAllMembership() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;

}

module.exports = {
    ListAllMembership
}