import { conf_toyyibpay } from "~~/server/constant";
import FormData from 'form-data';
import axios from 'axios';

export const create_payment_reference_no = async () => 
{
    return `AM${Math.floor(Math.random() * 9000000000) + 1000000000}`;
    //return new Date().getTime();
}

export const create_bill_fpx = async (bill_name, bill_description, payor_name, payor_email, payor_phone, amount) => 
{

    let result  = null;
    let payment_reference_no = await create_payment_reference_no();

    const toyyibPayReturnUrl    = 'http://localhost:3000/receipt';
    const toyyibPayCallbackUrl  = 'http://localhost:3000/receipt';

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