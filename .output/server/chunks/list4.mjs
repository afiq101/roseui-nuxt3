import { defineEventHandler, readBody } from 'h3';
import { c as connection } from './connection.mjs';
import 'mysql2/promise';

const db = connection;
async function GetOrganizationList(organizationName, organizationEmail, organizationStatus) {
  let result = null;
  try {
    let where_organization_name = organizationName ? ` AND organizationName LIKE '%${organizationName}%'` : "";
    let where_organization_email = organizationEmail ? ` AND organizationEmail LIKE '%${organizationEmail}%'` : "";
    let where_organization_status = organizationStatus ? ` AND organizationStatus LIKE '%${organizationStatus}%'` : "";
    let sql = `
        SELECT
        organizationName,
        organizationUsername,
        organizationType,
        organizationDisplayType,
        organizationPermalink,
        organizationCode,
        organizationPhone,
        organizationEmail,
        organizationAddress,
        organizationCity,
        organizationState,
        organizationPostcode,
        organizationImage,
        organizationGallery,
        organizationData,
        organizationCreatedDate,
        organizationStatus
        FROM organization
        WHERE organizationId IS NOT NULL
        ${where_organization_name}
        ${where_organization_email}
        ${where_organization_status}
        ORDER BY organizationRanking ASC
        LIMIT 100 
        `;
    let query = await db.query(sql);
    console.log("LOG QUERY GetOrganizationList", query);
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
    console.log("Syntax Error at Model GetOrganizationList : ", e);
    result = {
      status: false,
      data: []
    };
  }
  return result;
}
var _organizationmodel = {
  GetOrganizationList
};

const list = defineEventHandler(async (event) => {
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  let organization_name = null;
  let organization_email = null;
  let organization_status = null;
  let list_limit = 10;
  try {
    console.log("Request Body Parameters : ", readBody(event));
    let bodyParams = readBody(event);
    organization_name = bodyParams.organizationName ? bodyParams.organizationName : "";
    organization_email = bodyParams.organizationEmail ? bodyParams.organizationEmail : "";
    organization_status = bodyParams.organizationStatus ? bodyParams.organizationStatus : "";
    list_limit = bodyParams.limit ? bodyParams.limit : 10;
    let fetching_data = await _organizationmodel.GetOrganizationList(organization_name, organization_email, organization_status, list_limit);
    console.log("LOG fetching_data : ", fetching_data);
    if (fetching_data.status) {
      status_code = 200;
      status = "success";
      message = "Get Organization List Success";
      body = fetching_data.data;
    } else {
      status_code = 500;
      status = "Internal Server Error";
      message = "Something Went Wrong. Please contact your system administrator.";
      body = [];
    }
  } catch (e) {
    console.log("Syntax Error at Controller GetListOrganization : ", e);
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
//# sourceMappingURL=list4.mjs.map
