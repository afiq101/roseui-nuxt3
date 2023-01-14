import { initial_api_status } from "~~/server/constant"
import multer from "../../../multer";

export default defineEventHandler(async(event) => {

    let response = initial_api_status;

    try {

        let body    = await readBody(event);
        let parser  = await multer.parse(event,false,body);
        console.log("PARSER : ", parser);

        response.body = parser;

    } catch(e) {

    }

    return response;
})