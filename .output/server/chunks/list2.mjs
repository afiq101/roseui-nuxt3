import { defineEventHandler } from 'h3';
import { c as connection } from './connection.mjs';
import 'mysql2/promise';

const db = connection;
async function getListAllTransaction() {
  let result = null;
  try {
    let sql = `
        SELECT
        organizationName,
        billpaymentInvoiceNo,
        billpaymentAmount,
        billpaymentPayorName,
        billpaymentCreatedDate as datee,
        DATE_FORMAT(billpaymentCreatedDate, '%d/%m/%Y %r') as billpaymentCreatedDate,
        billpaymentStatus
        FROM billpayment bp 
        INNER JOIN organization o ON bp.billpaymentOrganizationId = o.organizationId
        ORDER BY datee DESC
        LIMIT 100`;
    let query = await db.query(sql);
    if (query) {
      result = {
        status: true,
        data: query
      };
    } else {
      result = {
        status: false,
        data: []
      };
    }
  } catch (e) {
    console.log("Syntax Error at Model getListAllTransaction : ", e);
    result = {
      status: false,
      data: []
    };
  }
  return result;
}
var _transactionmodel = {
  getListAllTransaction
};

const list = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  try {
    let fetch_transactions = await _transactionmodel.getListAllTransaction();
    console.log("LOG QUERY fetch_transaction : ", fetch_transactions);
    if (fetch_transactions.status) {
      status_code = 200;
      status = "success";
      message = "success";
      body = fetch_transactions.data;
    } else {
      status_code = 500;
      status = "Internal Server Error";
      message = "Internal Server Error. Please contact your system administrator";
      body = [];
    }
  } catch (e) {
    console.log("Syntax Error at Controller /GetAllTransaction : ", e);
    status_code = 500;
    status = "Internal Server Error";
    message = "Internal Server Error. Please contact your system administrator";
    body = [];
  }
  return {
    status_code,
    status,
    message,
    data: body
  };
});

export { list as default };
//# sourceMappingURL=list2.mjs.map
