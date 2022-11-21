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

module.exports = {
    ListWakafConfiguration
}