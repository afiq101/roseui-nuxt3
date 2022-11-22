const db = require('../connection');

async function ListAllCampaign() {

    let result = null;

    try {

        let sql = `
        SELECT
        campaign_name,
        campaign_code,
        campaign_description,
        campaign_permalink,
        campaign_expired,
        campaign_start_date,
        campaign_end_date,
        campaign_img,
        campaign_data,
        DATE_FORMAT(campaign_created_date, '%d-%m-%Y %r') as campaign_created_date,
        campaign_last_modified,
        campaign_status
        FROM 
        campaignWakaf
        `;

        let query = await db.query(sql);

        console.log("Log Query ListAllCampaign() : ", query);

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
        console.log("Syntax Error at Model ListAllCampaign() : ", e);
        result = {
            status: false,
            data: []
        }
    }

    return result;
}

module.exports = {
    ListAllCampaign
}