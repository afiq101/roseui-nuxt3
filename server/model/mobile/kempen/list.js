const db = require("../../../connection2")

async function GetListKempen(limit) {

    let result = null;

    try {

        let sql = `
        SELECT 
        Institusi_Name,
        Institusi_Username,
        Institusi_Description,
        Institusi_Email,
        Institusi_Phone,
        Institusi_Image,
        Kempen_Name,
        Kempen_Code,
        Kempen_Permalink,
        Kempen_Title,
        Kempen_Description,
        Kempen_Content,
        Kempen_Image,
        Kempen_Amount_Goals,
        Kempen_Amount_Collected,
        Kempen_Disabled_Max,
        DATE_FORMAT(Kempen_Date_Start, '%d %M %Y') as Kempen_Date_Start,
        DATE_FORMAT(Kempen_Expiry_Date, '%d %M %Y') as Kempen_Expiry_Date,
        Kempen_Display_Donor,
        Kempen_Featured,
        DATE_FORMAT(Kempen_Created_Date, '%d %M %Y') as Kempen_Created_Date,
        Kempen_Status,
        Kempen_Akad_Required,
        Kempen_Akad_Text
        FROM INSTITUSI A 
        INNER JOIN KEMPEN B ON A.Institusi_ID = B.Institusi_ID
        WHERE Kempen_Status = 1
        LIMIT ${limit}`

        let query = await db.query2(sql);

        console.log("Log Query Get List Kempen : ", query);

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
        console.log("Syntax Error at /model/mobile/kempen : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    GetListKempen
}