import { ListAllPewakaf } from "~~/server/model/_wakafmodel";

export default defineEventHandler(async (event) => {

    let status_code     = null;
    let status          = null;
    let message         = null;
    let body            = null;

    let search_string   = null;
    let wakaf_code      = null;

    try {

        let params = await readBody(event);

        search_string   = params.search ? params.search : '';
        wakaf_code      = params.wakaf_code ? params.wakaf_code : '';

        let fetch_data = await ListAllPewakaf(wakaf_code);
        console.log('Log Data ListAllPewakaf() : ', fetch_data);

        if(fetch_data.status) {
            status_code = 200;
            status      = 'success';
            message     = 'success';
            body        = fetch_data.data;
        } else {
            status_code = 500;
            status      = 'Internal Server Error';
            message     = 'Something went wrong. Please contact your system administrator.';
            body        = [];
        }

    } catch(e) {
        console.log('Syntax Error at Controller listallpewakaf : ', e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Errror. Please contact your system administrator.";
        body        = [];
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})