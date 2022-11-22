import { GetUserTransactionWakaf } from "~~/server/model/_wakafmodel";

export default defineEventHandler(async (event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let user_id     = null;
    
    try {

        let params = await readBody(event);

        user_id = params.userId ? params.userId : '';

        if(user_id === '' || user_id === null) {
            status_code = 400;
            status      = 'Bad Request';
            message     = 'Parameter userId is undefined or invalid. Please check your request parameter value.';
            body        = []
        } else {

            let get_data = await GetUserTransactionWakaf(user_id);
            console.log('Log Query GetUserTransactionWakaf() : ', get_data);

            if(get_data.status) 
            {
                status_code = 200;
                status      = "success";
                message     = "success";
                body        = get_data.data;
            } 
            else 
            {
                status_code = 500;
                status      = 'Internal Server Error';
                message     = 'Something went wrong. Please contact your system administrator.';
                body        = []
            }
        }

    } catch(e) {
        console.log('Syntax Error at Controller /wakaf/listusertransaction : ', e);
        status_code = 500;
        status      = 'Internal Server Error';
        message     = 'Internal Server Error. Please contact your system administrator.';
        body        = []
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})