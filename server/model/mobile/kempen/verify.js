const db = require('../../../connection2');

async function VerifyCampaign(kempenCode) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Kempen_ID,
        Institusi_ID,
        Kempen_Name,
        Kempen_Code,
        Kempen_Permalink,
        Kempen_Status
        FROM KEMPEN
        WHERE Kempen_Code = ?
        AND Kempen_Status = 1
        LIMIT 1`;

        let query = await db.query2(sql, [kempenCode]);

        console.log("Log Query VerifyCampaign : ", query);

        if(query) {
            result = {
                status: true,
                data: query[0],
                kempenID: query[0]["Kempen_ID"],
                organizationID: query[0]["Institusi_ID"]
            }
        } else {
            result = {
                status: false,
                data: [],
                kempenID: null,
                organizationID: null
            }
        }

    } catch(e) {
        console.log("Syntax Error at model /mobile/kempen/verify : ", e);
        result = {
            status: false,
            data: {},
            kempenID: null,
            organizationID: null
        }
    }

    return result;
}

module.exports = {
    VerifyCampaign
}