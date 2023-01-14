import { initial_api_status, response_api_200, response_api_500 } from "~~/server/constant"
import { GetListKempen } from "~~/server/model/mobile/kempen/list";

export default defineEventHandler(async(event) => {

    let response    = initial_api_status;
    let limit       = 10;

    try {

        let params = await readBody(event);
        limit = params.limit ? params.limit : 10;

        let get_kempen = await GetListKempen(limit);
        console.log("Log Function GetListKempen : ", get_kempen);

        if(get_kempen.status) {
            response = response_api_200;
            response.message = "Get list kempen success.";
            response.body = get_kempen.data
        } else {
            response = response_api_500;
            response.message = "Something went wrong. Please contact your system administrator.";
            response.body = []
        }

    } catch(e) {
        console.log("Syntax Error at API /kempen/list : ", e);
        response = response_api_500;
        response.message = "Internal Server Error. Please contact your system administrator."
    }

    return response;
})