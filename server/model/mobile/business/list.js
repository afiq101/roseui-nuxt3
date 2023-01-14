const db = require("../../../connection2");

async function ListAllBusiness(limit, bisnes_name, bisnes_code) {

    let result              = null;
    let where_bisness_name  = ``;
    let where_bisness_code  = ``;

    if(bisnes_name) {
        where_bisness_name = ` AND Keahlian_Business_Name LIKE '%${bisnes_name}%'`;
    }

    if(bisnes_code) {
        where_bisness_code = ` AND Keahlian_Business_Code LIKE '%${bisnes_code}%'`
    }

    try {

        let sql = `
        SELECT 
        Keahlian_Business_ID,
        Keahlian_Business_Name,
        Keahlian_Business_Description,
        Keahlian_Business_Code,
        Keahlian_Business_Payable,
        Keahlian_Business_Default_Fees,
        Keahlian_Business_Address,
        Keahlian_Business_Email,
        Keahlian_Business_Phone,
        Keahlian_Business_PIC_Name,
        Keahlian_Business_PIC_Email,
        Keahlian_Business_PIC_Phone,
        DATE_FORMAT(Keahlian_Business_Created_Date, '%d-%m-%Y %r') as Keahlian_Business_Created_Date,
        Keahlian_Business_Icon,
        Keahlian_Business_Image,
        Keahlian_Business_Gallery
        FROM KEAHLIAN_BUSINESS 
        WHERE Keahlian_Status = 1
        ${where_bisness_name}
        ${where_bisness_code}
        ORDER BY Keahlian_Ranking ASC
        LIMIT ${limit}`;

        let query = await db.query2(sql);

        console.log("Log Query List All Business : ", query);

        if(query.length > 0) {
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
        console.log("Syntax Error at ListAllBusiness() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListAllBusiness
}