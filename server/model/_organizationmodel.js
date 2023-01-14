const db = require('../connection');
const db2 = require('../connection2');

async function GetOrganizationList(organizationName, organizationEmail, organizationStatus) {

    let result = null;

    try {

        let where_organization_name     = organizationName ? ` AND organizationName LIKE '%${organizationName}%'` : '';
        let where_organization_email    = organizationEmail ? ` AND organizationEmail LIKE '%${organizationEmail}%'` : '';
        let where_organization_status   = organizationStatus ? ` AND organizationStatus LIKE '%${organizationStatus}%'` : '';

        let sql = `
        SELECT
        organizationName,
        organizationUsername,
        organizationType,
        organizationDisplayType,
        organizationPermalink,
        organizationCode,
        organizationPhone,
        organizationEmail,
        organizationAddress,
        organizationCity,
        organizationState,
        organizationPostcode,
        organizationImage,
        organizationGallery,
        organizationData,
        organizationCreatedDate,
        organizationStatus
        FROM organization
        WHERE organizationId IS NOT NULL
        ${where_organization_name}
        ${where_organization_email}
        ${where_organization_status}
        ORDER BY organizationRanking ASC
        LIMIT 100 
        `

        let query = await db.query(sql);

        console.log("LOG QUERY GetOrganizationList", query);

        if(query) {
            result = {
                status: true,
                data: query
            }
        }
        else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model GetOrganizationList : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result
}

async function VerifyOrganizationById(organizationId) {

    let result = null;

    try {

        let sql = `
        SELECT 
        ins.Institusi_ID, 
        Institusi_Name,
        Org_Wallet_ID
        FROM INSTITUSI ins INNER JOIN CREDIT_ACCOUNT_INSTITUSI cai
        ON ins.Institusi_ID = cai.Institusi_ID
        WHERE ins.Institusi_ID = ? AND Institusi_Status = 1`;
        let query = await db2.query2(sql, [organizationId]);

        if(query.length > 0) {
            result = {
                status: true,
                data: query[0]
            }
        } else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at /model/oragnizationmodel/VerifyOrganizationById : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    GetOrganizationList,
    VerifyOrganizationById
}