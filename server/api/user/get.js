import { ListUser } from "~~/server/model/_usermodel";

export default defineEventHandler(async (event) => {

  let status_code = null;
  let status      = null;
  let message     = null;
  let body        = null;

  let user_session    = null;
  let user_name       = null;
  let user_email      = null;
  let user_phone      = null;
  let user_secret_key = null;
  let user_status     = null;

  try {

      console.log("Request Parameter Body : ", readBody(event));
      let bodyParams = readBody(event);

      user_session    = bodyParams.userSession ? bodyParams.userSession : null;
      user_name       = bodyParams.userName ? bodyParams.userName : null;
      user_email      = bodyParams.userEmail ? bodyParams.userEmail : null;
      user_phone      = bodyParams.userPhone ? bodyParams.userPhone : null;
      user_secret_key = bodyParams.userSecretKey ? bodyParams.userSecretKey : null;
      user_status     = bodyParams.user_status ? bodyParams.user_status : null;

      {

          // VERIFY SESSION

          let fetch_data = await ListUser(user_name, user_email, user_phone, user_secret_key, user_status);
          console.log("LOG DATA fetch_data : ", fetch_data);

          if(fetch_data.status) {
              status_code = 200;
              status      = "success";
              message     = "Get User List Success";
              body        = fetch_data.data;
          } 
          else 
          {
              status_code = 500;
              status      = "Internal Server Error";
              message     = "Something Went Wrong. Please contact your system administrator";
              body        = [];
          }
      }

  } catch(e) {

      console.log("Syntax Error at /GetListUser : ", e);
      status_code = 500;
      status      = "Internal Server Error";
      message     = "Internal Server Error. Please contact your system administrator";
      body        = []

  }

    return {
        status_code: status_code,
        status: status,
        message: message,
        data: body
    }

  });
  