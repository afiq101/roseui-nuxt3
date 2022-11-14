import { getListAllTransaction } from "~~/server/model/_transactionmodel";

export default defineEventHandler(async (event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    try {

        let fetch_transactions = await getListAllTransaction();
        console.log("LOG QUERY fetch_transaction : ", fetch_transactions);

        if(fetch_transactions.status) 
        {
            status_code = 200;
            status      = "success";
            message     = "success";
            body        = fetch_transactions.data
        } 
        else 
        {
            status_code     = 500;
            status          = "Internal Server Error";
            message         = "Internal Server Error. Please contact your system administrator";
            body            = [];
        }

    } catch(e) {
        console.log("Syntax Error at Controller /GetAllTransaction : ", e);
        status_code     = 500;
        status          = "Internal Server Error";
        message         = "Internal Server Error. Please contact your system administrator";
        body            = [];
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})