const db = require('../connection')

async function ListConfiguration() {
    let result = null;

    try {

        let sql     = `SELECT * FROM configuration`;
        let query   = await db.query(sql);
        
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
        console.log("Syntax Error at Model ListConfiguration : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

async function UpdateConfiguration(type, value) {

    let result = null;

    if(type === "" || type === null) {
        result = {
            status: false,
            message: "Missing type. Please check your parameter."
        }
    } else if(value === "" || value === null) {
        result = {
            status: false,
            message: "Missing value. Please check your parameter."
        }
    } else {

        try {

            let statement = ` configurationStatus = ${value}`;
            let sql = `UPDATE configuration SET ${statement}
            WHERE configurationCode LIKE '${type}'
            LIMIT 1`;

            console.log("LOG SQL UPDATE CONFIG : ", sql);

            let query = await db.query(sql);

            if(query) {
                result = {
                    status: true,
                    message: `Configuration ${type} has been update successfully.`
                }
            }else {
                result = {
                    status: true,
                    message: `Unable to update configuration ${type}. Please contact your system administrator.`
                }
            }

        } catch(e) {
            console.log("Syntax Error at Model UpdateConfiguration : ", e);
            result = {
                status: false,
                message: "Syntaxt Error. Please contact your system administrator."
            }
        }   

    }

    return result;
}

module.exports = {
    ListConfiguration,
    UpdateConfiguration
}