const db = require("../../../connection2");

async function ListOrganization() {

    let result = null;

    try {

        let sql = `
        SELECT 
        Institusi_Id,
        Institusi_Name,
        Institusi_Fullname,
        Institusi_Description,
        Institusi_Email,
        Institusi_Phone,
        Institusi_Bank_Account_Number,
        Institusi_Bank_Account_Name,
        Institusi_Bank_Account_Holder_Name,
        Institusi_Image,
        Institusi_Galery,
        Institusi_Status,
        Institusi_Bill_Type
        FROM INSTITUSI
        WHERE Institusi_Status = 1`;

        let query = await db.query2(sql);


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
        console.log("Syntax Error at Model /mobile/organization : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListOrganization
}
