import { defineEventHandler, readBody } from 'h3';
import { c as connection } from './connection.mjs';
import 'mysql2/promise';

const db = connection;
async function ListOrganizationWallet() {
  let result = null;
  try {
    let sql = `
        SELECT
        organizationName,
        organizationWalletAccountNumber,
        FORMAT(organizationWalletBalance, 2) as organizationWalletBalance,
        organizationWalletFloat,
        organizationWalletCampaignCollection,
        DATE_FORMAT(organizationWalletCreatedDate, '%d-%m-%Y %r') as organizationWalletCreatedDate,
        organizationWalletStatus
        FROM organizationWallet ow
        INNER JOIN organization o ON ow.organizationWalletOrgId = o.organizationId
        `;
    let query = await db.query(sql);
    console.log("LOG QUERY ListOrganizationWallet : ", query);
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
    console.log("Syntax Error at Model ListOrganizationWallet : ", e);
    result = {
      status: false,
      data: []
    };
  }
  return result;
}
var _organizationwalletmodel = {
  ListOrganizationWallet
};

const list = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  try {
    let params = await readBody(event);
    let fetch_data = await _organizationwalletmodel.ListOrganizationWallet();
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
    console.log("Syntax Error at Controller /organization/wallet/list : ", e);
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
//# sourceMappingURL=list3.mjs.map
