import { ListOrganizationWallet } from "~~/server/model/_organizationwalletmodel";

export default defineEventHandler(async(event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let limit           = null;
    let search_string   = null;

    try {

        let params = await readBody(event);

        let fetch_data = await ListOrganizationWallet();
        console.log("LOG ListWalletUser : ", fetch_data);

        if(fetch_data.status) 
        {
            status_code = 200;
            status      = "success";
            message     = "success";
            body        = fetch_data.data;
        }
        else 
        {
            status_code = 500;
            status      = "Internal Server Error";
            message     = "Something went wrong while getting your data. Please contact your system administrator";
            body        = []
        }

    } catch(e) {
        console.log("Syntax Error at Controller /organization/wallet/list : ", e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator";
        body        = []

    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})