import { defineEventHandler, readBody } from 'h3';
import { _ as _configurationmodel } from './_configurationmodel.mjs';
import './connection.mjs';
import 'mysql2/promise';

const list = defineEventHandler(async (event) => {
  let bodyParams = readBody(event);
  let status_code = null;
  let status = null;
  let message = null;
  let body = null;
  try {
    console.log("Request Parameter : ", bodyParams);
    let fetching = await _configurationmodel.ListConfiguration();
    console.log("Log LisConfiguration() : ", fetching);
    if (fetching.status) {
      status_code = 200;
      status = "success";
      message = "success";
      body = fetching.data;
    } else {
      status_code = 500;
      status = "Internal Server Error";
      message = "Something Went Wrong. Please contact your system administrator.";
      body = [];
    }
  } catch (e) {
    console.log("Syntax Error at Controller /ListConfiguration", e);
    status_code = 500;
    status = "Internal Server Error";
    message = "Internal Server Error. Please contact your system administrator.";
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
//# sourceMappingURL=list5.mjs.map
