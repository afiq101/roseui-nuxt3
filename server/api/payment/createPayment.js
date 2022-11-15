//import { create_bill_fpx } from '~~/server/toyyibpayconf';

import { conf_toyyibpay } from "~~/server/constant";
import { create_bill_fpx } from "~~/server/toyyibpayconf";

export default defineEventHandler(async(event) => {

    let status_code = null;
    let status      = null;
    let message     = null;
    let body        = null;

    let bodyParams  = await readBody(event);

    let bill_name           = null;
    let bill_description    = null;
    let payor_name          = null;
    let payor_email         = null;
    let payor_phone         = null;
    let amount              = null;

    try {

        console.log("REQUEST PARAM : ", bodyParams);

        bill_name           = bodyParams.billName ? bodyParams.billName : "";
        bill_description    = bodyParams.billDescription ? bodyParams.billDescription : "";
        payor_name          = bodyParams.billTo ? bodyParams.billTo : "";
        payor_email         = bodyParams.billEmail ? bodyParams.billEmail : "";
        payor_phone         = bodyParams.billPhone ? bodyParams.billPhone : "";
        amount              = bodyParams.billAmount ? parseFloat(bodyParams.billAmount) : 0;

        console.log("bill_name : ", bill_name);
        console.log("bill_description : ", bill_description);
        console.log("payor_name : ", payor_name);
        console.log("payor_email : ", payor_email);
        console.log("payor_phone : ", payor_phone);
        console.log("amount : ", amount);

        if(bill_name === "" || bill_description === "" || payor_name === "" || payor_email === "" || payor_phone === "" || amount === 0) 
        {
            status_code = 400;
            status      = "Bad Request";
            message     = "One of your parameter is invalid or undefined. Please check your parameter.";
            body        = {};
        } 
        else 
        {

            let create_bill = await create_bill_fpx(
                bill_name,
                bill_description,
                payor_name,
                payor_email,
                payor_phone,
                amount
            )

            console.log("LOG GENERATE BILL FPX : ", create_bill);

            if(create_bill.status === true) {
                status_code = 200;
                status      = "success";
                message     = "Bill is created successfully";
                body = {
                    billCode: create_bill.billcode,
                    url: `${conf_toyyibpay.url + create_bill.billcode}`
                }
            }
            else {
                status_code = 500;
                status      = "Failed";
                message     = "Unable to create your bill. Please contact your system administrator.";
                body = {
                    billCode: null
                }
            }

        }

    } catch(e) {
        console.log("Syntax Error at API defaultPayment : ", e);
        status_code = 500;
        status      = "Internal Server Error";
        message     = "Internal Server Error. Please contact your system administrator.";
        body        = {}
    }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }
})