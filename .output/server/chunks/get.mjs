import { defineEventHandler, readBody } from 'h3';
import { c as connection } from './connection.mjs';
import 'mysql2/promise';

const db = connection;
async function ListUser(user_name, user_email, user_phone, user_secret_key, user_status) {
  let result = null;
  try {
    let where_username = user_name ? ` AND (accountUserName LIKE '%${user_name}%' OR accountUserFullname LIKE '%${user_name}%')` : "";
    let where_useremail = user_email ? ` AND accountUserEmail LIKE '%${user_email}%'` : "";
    let where_userphone = user_phone ? ` AND accountUserContact LIKE '%${user_phone}%'` : "";
    let where_usersecret = user_secret_key ? ` AND accountUserSecretKey LIKE '%${user_secret_key}%'` : "";
    let where_userstatus = user_status ? ` AND accountStatus LIKE '%${user_status}%'` : "";
    let sql = `
        SELECT
        accountUserName as "Nama Pengguna",
        accountUserSecretKey as "Secret Key",
        accountUserFullname as "Nama Penuh",
        accountUserIC as "Kad Pengenalan",
        accountUserEmail as "E-mel",
        accountUserContact as "No. Telefon",
        accountUserAddress as "Alamat",
        accountStatus as Status,
        DATE_FORMAT(accountCreatedDate, '%d-%m-%Y %r') as "Tarikh Daftar",
        accountLHDN as "Akaun LHDN"
        FROM 
        userAccount
        WHERE accountId IS NOT NULL
        ${where_username}
        ${where_useremail}
        ${where_userphone}
        ${where_usersecret}
        ${where_userstatus}
        ORDER BY accountCreatedDate DESC
        LIMIT 100`;
    let query = await db.query(sql);
    console.log("LOG QUERY GetUserList : ", query);
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
    console.log("Syntax Error at Model GetUserList : accountUserEmail", e);
    result = {
      status: false,
      data: []
    };
  }
  return result;
}
var _usermodel = {
  ListUser
};

const get = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  let user_session = null;
  let user_name = null;
  let user_email = null;
  let user_phone = null;
  let user_secret_key = null;
  let user_status = null;
  try {
    console.log("Request Parameter Body : ", readBody(event));
    let bodyParams = readBody(event);
    user_session = bodyParams.userSession ? bodyParams.userSession : null;
    user_name = bodyParams.userName ? bodyParams.userName : null;
    user_email = bodyParams.userEmail ? bodyParams.userEmail : null;
    user_phone = bodyParams.userPhone ? bodyParams.userPhone : null;
    user_secret_key = bodyParams.userSecretKey ? bodyParams.userSecretKey : null;
    user_status = bodyParams.user_status ? bodyParams.user_status : null;
    {
      let fetch_data = await _usermodel.ListUser(user_name, user_email, user_phone, user_secret_key, user_status);
      console.log("LOG DATA fetch_data : ", fetch_data);
      if (fetch_data.status) {
        status_code = 200;
        status = "success";
        message = "Get User List Success";
        body = fetch_data.data;
      } else {
        status_code = 500;
        status = "Internal Server Error";
        message = "Something Went Wrong. Please contact your system administrator";
        body = [];
      }
    }
  } catch (e) {
    console.log("Syntax Error at /GetListUser : ", e);
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

export { get as default };
//# sourceMappingURL=get.mjs.map
