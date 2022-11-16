const db = require('../connection');

async function ListOrganizationWallet() {

    let result = null;

    try {

        let sql = `
        SELECT
        organizationName,
        organizationWalletAccountNumber,
        FORMAT(organizationWalletBalance, 2) as organizationWalletBalance,
        organizationWalletFloat,
        organizationWalletCampaignCollection,
        DATE_FORMAT(organizationWalletCreatedDate, '%d-%m-%Y %r') as organizationWalletCreatedDate,
        organizationWalletStatus
        FROM organizationWallet ow
        INNER JOIN organization o ON ow.organizationWalletOrgId = o.organizationId
        `;

        let query = await db.query(sql);

        console.log("LOG QUERY ListOrganizationWallet : ", query);

        if(query) {
            result = {
                status: true,
                data: query
            }
        }else {
            result = {
                status: false,
                data: []
            }
        }

    } catch(e) {
        console.log("Syntax Error at Model ListOrganizationWallet : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result

}

module.exports = {
    ListOrganizationWallet
}