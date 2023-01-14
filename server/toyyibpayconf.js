import { conf_toyyibpay, domain_url } from "~~/server/constant";
import FormData from 'form-data';
import axios from 'axios';
import { sha256 } from "js-sha256";
import jwt from "jsonwebtoken";

let accessSecretKey     = "h98273gr8g28gf82yg3eeyhe28uwyeh287f8gbbrebhgo8827byf2bey82geb8saf7g";
let refreshSecretKey    = "duhbo1ueh8723rbyugo8w475hto87bfg87erg8wbe8fg827g3or8ubtij45nlkjnwep";

export const encrypt_password = async (password) => {
    let hasing = await sha256(password);
    console.log("Hashing Password : ", hasing);

    return hasing;
}

export const create_credit_account_no = async () => 
{
    return `${Math.floor(Math.random() * 9000000000) + 1000000000}`;
}

export const create_payment_reference_no = async () => 
{
    return `BIZ${Math.floor(Math.random() * 9000000000) + 1000000000}`;
}

export const create_topup_reference_no = async () => 
{
    let marking = "BIZTOPUP";
    let new_date_time = new Date().getTime();

    return `${marking}${Math.floor(Math.random() * 9000000000) + 1000000000}${new_date_time}`;
}

export const create_bill_fpx = async (bill_name, bill_description, payor_name, payor_email, payor_phone, amount, billExternalReferenceNo) => 
{

    let result  = null;
    let payment_reference_no = billExternalReferenceNo ? billExternalReferenceNo : await create_payment_reference_no();

    const toyyibPayReturnUrl    = `${domain_url.returnUrl}/Receipt`;

    bill_name = bill_name.length > 30 ? bill_name.substr(0, 25) + '...' : bill_name;

    //const toyyibPayCallbackUrl  = `${domain_url.callbackUrl}/api/mobile/payment/callback`;
    const toyyibPayCallbackUrl  = `https://7e3n35hlm3.execute-api.ap-southeast-1.amazonaws.com/dev/callbackPayment`; 

    let formData = new FormData();
    formData.append('userSecretKey', conf_toyyibpay.secretKey);
    formData.append('categoryCode', conf_toyyibpay.categoryCode);
    formData.append('billName', bill_name);
    formData.append('billDescription', bill_description);
    formData.append('billTo', payor_name);
    formData.append('billEmail', payor_email);
    formData.append('billPhone', payor_phone);
    formData.append('billPriceSetting', 1);
    formData.append('billPayorInfo', 1);
    formData.append('billPaymentChannel', 0);
    formData.append('billAmount', parseFloat(amount).toFixed(2) * 100);
    formData.append('billExternalReferenceNo', payment_reference_no);
    formData.append('billReturnUrl', toyyibPayReturnUrl);
    formData.append('billCallbackUrl', toyyibPayCallbackUrl);

    var config = {
        method: 'post',
        url: conf_toyyibpay.paymentUrl,
        headers: { 
        },
        data : formData
    };

    try {

        let hit_toyyibpay = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            if(response.data[0]["BillCode"]) {
                result = {
                    status: true,
                    billcode: response.data[0]["BillCode"]
                }
            } else {
                result = {
                    status: false,
                    billcode: null
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            result = {
                status: false,
                billcode: null
            }
        });

    } catch(e) {
        console.log(e);
        result = {
            status: false,
            billcode: null
        }
    }

    return result;
}

export const create_bill_topup_fpx = async (bill_name, bill_description, payor_name, payor_email, payor_phone, amount, billExternalReferenceNo) => 
{

    let result  = null;
    let payment_reference_no = billExternalReferenceNo ? billExternalReferenceNo : await create_payment_reference_no();

    const toyyibPayReturnUrl    = `${domain_url.returnUrl}/ReceiptWallet`;

    //const toyyibPayCallbackUrl  = `${domain_url.callbackUrl}/api/mobile/payment/callback`;
    const toyyibPayCallbackUrl  = `https://7e3n35hlm3.execute-api.ap-southeast-1.amazonaws.com/dev/callbackTopup`; 

    if(bill_name.length > 30) {
        bill_name = bill_name.substr(0, 26) + "...";
    }

    if(bill_description.length > 100) {
        bill_name = bill_name.substr(0, 96) + "...";
    }

    let formData = new FormData();
    formData.append('userSecretKey', conf_toyyibpay.secretKey);
    formData.append('categoryCode', conf_toyyibpay.categoryCode);
    formData.append('billName', bill_name);
    formData.append('billDescription', bill_description);
    formData.append('billTo', payor_name);
    formData.append('billEmail', payor_email);
    formData.append('billPhone', payor_phone);
    formData.append('billPriceSetting', 1);
    formData.append('billPayorInfo', 1);
    formData.append('billPaymentChannel', 0);
    formData.append('billAmount', parseFloat(amount).toFixed(2) * 100);
    formData.append('billExternalReferenceNo', payment_reference_no);
    formData.append('billReturnUrl', toyyibPayReturnUrl);
    formData.append('billCallbackUrl', toyyibPayCallbackUrl);

    var config = {
        method: 'post',
        url: conf_toyyibpay.paymentUrl,
        headers: { 
        },
        data : formData
    };

    try {

        let hit_toyyibpay = await axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));

            if(response.data[0]["BillCode"]) {
                result = {
                    status: true,
                    billcode: response.data[0]["BillCode"]
                }
            } else {
                result = {
                    status: false,
                    billcode: null
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            result = {
                status: false,
                billcode: null
            }
        });

    } catch(e) {
        console.log(e);
        result = {
            status: false,
            billcode: null
        }
    }

    return result;
}

export const create_access_jwt_token = async (secret_key) => {

    let signJWT = await jwt.sign(secret_key, accessSecretKey);
    return signJWT;
}

export const create_refresh_jwt_token = async (secret_key) => {

    let signJWT = await jwt.sign(secret_key, refreshSecretKey);
    return signJWT;

}

export const verify_jwt_token = async (jwt_token) => {
    let verifyJWT = await jwt.verify(jwt_token, accessSecretKey);
    return verifyJWT;
}

export const create_billpayment_invoice_no = async () => 
{
    let marking = "BIZ";
    let new_date_time = new Date().getTime();

    return `${marking}${Math.floor(Math.random() * 9000000000) + 1000000000}${new_date_time}`;
}

export const create_wakaf_members_no = async () => 
{
    let marking = "WAKAFNO";
    let new_date_time = new Date().getTime();

    return `${marking}${Math.floor(Math.random() * 9000000000) + 1000000000}${new_date_time}`;
}

export const create_bisnes_members_no = async () => 
{
    let marking = "WAKAFBIZ";
    let new_date_time = new Date().getTime();

    return `${marking}${Math.floor(Math.random() * 9000000000) + 1000000000}${new_date_time}`;
}