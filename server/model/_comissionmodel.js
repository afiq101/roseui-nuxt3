const db = require('../connection')


async function ListAllCommission() {

    let result = null;

    try {

        let sql     = `SELECT * FROM comissionConfiguration`;
        let query   = await db.query(sql);
        
        console.log("LOG QUERY ListAllCommission : ", query);

        if(query) {
            result = {
                status: true,
                data: query
            }
        }
        else
        {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model ListAllCommission : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListAllCommission
}