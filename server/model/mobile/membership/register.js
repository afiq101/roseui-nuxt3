const { create_wakaf_members_no, create_bisnes_members_no } = require("~~/server/toyyibpayconf");
const db = require("../../../connection2");

async function GetWakafMemberLevel(amount) {

    let level = null;

    if(amount > 1000000) {
        level = {
            id: 6,
            title: 'Ahli Balatin'
        }
    } else {

        let sql = `
        SELECT * FROM 
        AWQAF_MEMBER_CONFIGURATION 
        WHERE ${amount} 
        BETWEEN Wakaf_Configuration_Min_Fees 
        AND Wakaf_Configuration_Max_Fees LIMIT 1`;

        let query = await db.query2(sql);

        if(query) {
            level = {
                id: query[0]["Wakaf_Configuration_ID"],
                title: query[0]["Wakaf_Configuration_Name"]
            }
        } else {
            level = {
                id: null,
                title: null
            }
        }
    }

    return level;

}

async function GetKeahlianBusiness(businessCode) {
    let result = null;

    try {

        let sql     = `SELECT * FROM KEAHLIAN_BUSINESS WHERE Keahlian_Business_Code = ? LIMIT 1`;
        let query   = await db.query2(sql, [businessCode]);
        
        if(query.length > 0) {
            result = {
                status: true,
                business_id: query[0]["Keahlian_Business_ID"] 
            }
        } else {
            result = {
                status: false,
                business_id: null
            }
        }
    } catch(e) {
        console.log("Syntax Error at GetKeahlianBusiness() : ", e);
        result = {
            status: false,
            business_id: null
        }
    }

    return result;
}

async function RegisterWakafMember(accountId, payAmount, member_type, pic_name, pic_email, pic_address, pic_phone, pic_identification) {

    let result = null;
    let define_wakaf_level = await GetWakafMemberLevel(payAmount);

    let wakaf_number            = await create_wakaf_members_no();
    let wakaf_configuration_id  = define_wakaf_level.id;
    let wakaf_level             = define_wakaf_level.title; 
    let wakaf_status            = 1;

    try {

        let sql = `
        INSERT INTO AWQAF_MEMBERS(
            Account_ID,
            Wakaf_Configuration_ID,
            Member_Reference_Code,
            Member_Type,
            Member_Level,
            Member_PIC_Name,
            Member_PIC_Email,
            Member_PIC_Address,
            Member_PIC_Phone,
            Member_PIC_Identification,
            Member_Current_Wakaf_Amount,
            Member_Register_Date,
            Member_Status
        ) VALUES (?,?,?,?,?,?,?,?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),?)`;

        let query = await db.query2(sql, [
            accountId,
            wakaf_configuration_id,
            wakaf_number,
            member_type,
            wakaf_level,
            pic_name ? pic_name : null,
            pic_email ? pic_email : null,
            pic_address ? pic_address : null,
            pic_phone ? pic_phone : null,
            pic_identification ? pic_identification : null,
            wakaf_status
        ]);

        console.log("Log Query RegisterWakafMember() : ", query);

        if(query.insertId > 0) {
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
        console.log("Syntax Error at RegisterWakafMember() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;

}

async function RegisterBusinessMember(accountId, payAmount, businessCode) {

    let result = null;
    let defined_business = await GetKeahlianBusiness(businessCode);

    let bisnes_number   = await create_bisnes_members_no();
    let bisness_id      = defined_business.business_id;
    let status          = 1;

    try {

        let sql = `
        INSERT INTO USER_KEAHLIAN_BUSINESS(
            Keahlian_Business_ID,
            Account_ID,
            User_Keahlian_Reference_Code,
            User_Keahlian_Register_Date,
            User_Keahlian_Payment_Fees,
            User_Keahlian_Status
        ) VALUES(?,?,?, CONVERT_TZ(NOW(), '+00:00', '+08:00'),?,?)`;

        let query = await db.query2(sql, [
            bisness_id,
            accountId,
            bisnes_number,
            payAmount,
            status
        ]);

        console.log("Log Query Register RegisterBusinessMember() : ", query);

        if(query.insertId > 0) {
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
        console.log("Syntax Error at RegisterBusinessMember() : ", e);
        result = {
            status: false,
            data: {}
        }
    }

    return result;
}

module.exports = {
    RegisterWakafMember,
    RegisterBusinessMember
}