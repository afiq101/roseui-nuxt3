import { defineEventHandler, readBody } from 'h3';
import FormData from 'form-data';
import axios from 'axios';

const conf_toyyibpay = {
  url: "https://dev.toyyibpay.com/",
  paymentUrl: "https://dev.toyyibpay.com/api/createBill",
  secretKey: "g9elhdjo-j4a4-pi4e-om7c-dmf21lzf097g",
  categoryCode: "echbnjb6"
};

const create_payment_reference_no = async () => {
  return `AM${Math.floor(Math.random() * 9e9) + 1e9}`;
};
const create_bill_fpx = async (bill_name, bill_description, payor_name, payor_email, payor_phone, amount) => {
  let result = null;
  let payment_reference_no = await create_payment_reference_no();
  const toyyibPayReturnUrl = "http://localhost:3000/receipt";
  const toyyibPayCallbackUrl = "http://localhost:3000/receipt";
  let formData = new FormData();
  formData.append("userSecretKey", conf_toyyibpay.secretKey);
  formData.append("categoryCode", conf_toyyibpay.categoryCode);
  formData.append("billName", bill_name);
  formData.append("billDescription", bill_description);
  formData.append("billTo", payor_name);
  formData.append("billEmail", payor_email);
  formData.append("billPhone", payor_phone);
  formData.append("billPriceSetting", 1);
  formData.append("billPayorInfo", 1);
  formData.append("billPaymentChannel", 0);
  formData.append("billAmount", parseFloat(amount).toFixed(2) * 100);
  formData.append("billExternalReferenceNo", payment_reference_no);
  formData.append("billReturnUrl", toyyibPayReturnUrl);
  formData.append("billCallbackUrl", toyyibPayCallbackUrl);
  var config = {
    method: "post",
    url: conf_toyyibpay.paymentUrl,
    headers: {},
    data: formData
  };
  try {
    let hit_toyyibpay = await axios(config).then(function(response) {
      console.log(JSON.stringify(response.data));
      if (response.data[0]["BillCode"]) {
        result = {
          status: true,
          billcode: response.data[0]["BillCode"]
        };
      } else {
        result = {
          status: false,
          billcode: null
        };
      }
    }).catch(function(error) {
      console.log(error);
      result = {
        status: false,
        billcode: null
      };
    });
  } catch (e) {
    console.log(e);
    result = {
      status: false,
      billcode: null
    };
  }
  return result;
};

const createPayment = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  let bodyParams = await readBody(event);
  let bill_name = null;
  let bill_description = null;
  let payor_name = null;
  let payor_email = null;
  let payor_phone = null;
  let amount = null;
  try {
    console.log("REQUEST PARAM : ", bodyParams);
    bill_name = bodyParams.billName ? bodyParams.billName : "";
    bill_description = bodyParams.billDescription ? bodyParams.billDescription : "";
    payor_name = bodyParams.billTo ? bodyParams.billTo : "";
    payor_email = bodyParams.billEmail ? bodyParams.billEmail : "";
    payor_phone = bodyParams.billPhone ? bodyParams.billPhone : "";
    amount = bodyParams.billAmount ? parseFloat(bodyParams.billAmount) : 0;
    console.log("bill_name : ", bill_name);
    console.log("bill_description : ", bill_description);
    console.log("payor_name : ", payor_name);
    console.log("payor_email : ", payor_email);
    console.log("payor_phone : ", payor_phone);
    console.log("amount : ", amount);
    if (bill_name === "" || bill_description === "" || payor_name === "" || payor_email === "" || payor_phone === "" || amount === 0) {
      status_code = 400;
      status = "Bad Request";
      message = "One of your parameter is invalid or undefined. Please check your parameter.";
      body = {};
    } else {
      let create_bill = await create_bill_fpx(
        bill_name,
        bill_description,
        payor_name,
        payor_email,
        payor_phone,
        amount
      );
      console.log("LOG GENERATE BILL FPX : ", create_bill);
      if (create_bill.status === true) {
        status_code = 200;
        status = "success";
        message = "Bill is created successfully";
        body = {
          billCode: create_bill.billcode,
          url: `${conf_toyyibpay.url + create_bill.billcode}`
        };
      } else {
        status_code = 500;
        status = "Failed";
        message = "Unable to create your bill. Please contact your system administrator.";
        body = {
          billCode: null
        };
      }
    }
  } catch (e) {
    console.log("Syntax Error at API defaultPayment : ", e);
    status_code = 500;
    status = "Internal Server Error";
    message = "Internal Server Error. Please contact your system administrator.";
    body = {};
  }
  return {
    status_code,
    status,
    message,
    data: body
  };
});

export { createPayment as default };
//# sourceMappingURL=createPayment.mjs.map
