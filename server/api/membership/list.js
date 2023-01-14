import { initial_api_status, response_api_200, response_api_500 } from "~~/server/constant"
import { ListAllMembership } from "~~/server/model/_membershipmodel";

export default defineEventHandler(async (event) => {

    let response        = initial_api_status;
    let membership_code = null;

    try {

        let params = await readBody(event);

        console.log("Request Param : ", params);

        membership_code = params.membershipCode ? params.membershipCode : "";

        let hit = await ListAllMembership(membership_code);
        console.log("Log Response Model ListAllMembership() : ", hit);

        if(hit.status) {
            response        = response_api_200;
            response.body   = hit.data; 
        } else {
            response         = response_api_500;
            response.message = `Something went wrong while fetching list of membership.` 
        }

    } catch(e) {
        console.log('Syntax Error at Controller /api/membership/list : ', e);
        response = response_api_500;
    }

    return response;
})