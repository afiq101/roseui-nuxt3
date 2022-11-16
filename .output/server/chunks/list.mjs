import { defineEventHandler, readBody } from 'h3';
import { c as connection } from './connection.mjs';
import 'mysql2/promise';

const db = connection;
async function ListWalletUser() {
  let result = null;
  try {
    let sql = `
        SELECT 
        accountUsername,
        accountUserFullname,
        ewalletAccountNumber,
        ewalletBalance,
        ewalletBaucerBalance,
        ewalletVerificationCode,
        DATE_FORMAT(ewalletCreatedDate, '%d-%m-%Y %r') as ewalletCreatedDate,
        ewalletStatus
        FROM 
        ewallet e
        INNER JOIN userAccount a ON e.ewalletUserId = a.accountId
        `;
    let query = await db.query(sql);
    console.log("LOG QUERY LIST WALLET USER : ", query);
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
    console.log("Syntax Error at Model ListWalletUser : ", e);
    result = {
      status: false,
      data: []
    };
  }
  return result;
}
var _userwalletmodel = {
  ListWalletUser
};

const list = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  try {
    let params = await readBody(event);
    let fetch_data = await _userwalletmodel.ListWalletUser();
    console.log("LOG ListWalletUser : ", fetch_data);
    if (fetch_data.status) {
      status_code = 200;
      status = "success";
      message = "success";
      body = fetch_data.data;
    } else {
      status_code = 500;
      status = "Internal Server Error";
      message = "Something went wrong while getting your data. Please contact your system administrator";
      body = [];
    }
  } catch (e) {
    console.log("Syntax Error at Controller /user/wallet/list : ", e);
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
//# sourceMappingURL=list.mjs.map
