const production_url = 'https://dev.bizamal.com';
const development_url = 'http://localhost:3000';

export const conf_toyyibpay = {
    url: 'https://dev.toyyibpay.com/',
    paymentUrl: 'https://dev.toyyibpay.com/api/createBill',
    secretKey: 'g9elhdjo-j4a4-pi4e-om7c-dmf21lzf097g',
    categoryCode: 'echbnjb6'
}

export const domain_url = {
    url: process.env.NODE_ENV === "production" ? production_url : development_url,
    returnUrl: 'bizamal://',
    callbackUrl: 'http://192.168.0.142:3000'
}

export const initial_api_status = {
    status_code: null,
    status: null,
    message: null,
    body: null
}

export const response_api_200 = {
    status_code: 200,
    status: "successs",
    message: "success",
    body: []
}

export const response_api_400 = {
    status_code: 400,
    status: "Bad Request",
    message: "Bad Request. Please check your API paramter value",
    body: []
}

export const response_api_forbidden = {
    status_code: 403,
    status: "Forbidden",
    message: "Unauthorized API request. Please make sure that you've the authority to call this API.",
    body: []
}

export const response_api_500 = {
    status_code: 500,
    status: "Internal Server Error",
    message: "Internal Server Error. Please contact your system administrator.",
    body: []
}