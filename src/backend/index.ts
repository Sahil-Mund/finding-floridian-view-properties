import axios from "axios";
import {
  CHAT_AI_RESPONSE,
  CONTACT_US_FORM,
  CREATE_PROPERTY,
  FORMS_SPARK,
  GET_LOGGED_IN_USER_DETAILS,
  GHC_AWS_URI,
  USER_DETAILS_FORM,
  USER_LOGIN,
  USER_SIGNUP,
} from "../api";
import { contactFormDataType } from "../types/type";
import { useAuth } from "hooks/useAuth";

export const getAIRepsonse = async (message: string) => {
  try {
    const response = await axios.post(CHAT_AI_RESPONSE, {
      query: message,
    });

    console.log(response);
    return response.data;
  } catch (error) {
    return error;
  }
};
export const submitContactForm = async (body: contactFormDataType) => {
  try {
    const response = await axios.post(CONTACT_US_FORM, body);

    return response.data;
  } catch (error) {
    return error;
  }
};
export const submitUserDetailsForm = async (body: any) => {
  try {
    const response = await axios.post(USER_DETAILS_FORM, body);

    return response.data;
  } catch (error) {
    return error;
  }
};

export const fetchPostsData = async () => {
  try {
    //   const query = `
    //   mutation insertOneCompany {
    //     insert_company_one(object: {name: "newData", description: "test desd"}) {
    //       id
    //       name
    //       description
    //       created_at
    //     }
    //   }
    // `;

    const query = `query MyQuery {
    Users {
      id
      name
    }
    
  }`;

    const API_URL = "https://polished-killdeer-52.hasura.app/v1/graphql";
    const API_KEY =
      "JYkM3KVG9ELGsTjkNZROTsTHdFfjN3nC7CWJaUpURxxWZvKD80Jy1bzRFH6zI31G";

    const data = await axios({
      method: "post",
      url: API_URL,
      headers: {
        "Content-Type": "application/json",
        "x-hasura-admin-secret": API_KEY,
      },
      data: {
        query: query,
      },
    });

    console.log(data.data.data.Users);
  } catch (error) {
    console.error(error);
  }
};

export const user_singup = async (body: any) => {
  try {
    const response = await axios.post(USER_SIGNUP, body);

    return response.data;
  } catch (error) {
    return error;
  }
};
export const user_login = async (body: any) => {
  try {
    const response = await axios.post(USER_LOGIN, body);

    return response.data;
  } catch (error) {
    return error;
  }
};


export const add_property = async (body: any) => {
  try {
    const authToken = JSON.parse(sessionStorage.getItem('user_access_token') as string);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };
    const response = await axios.post(CREATE_PROPERTY, body, { headers });


    return response.data;
  } catch (error) {
    // console.log(error);
    return error;
  }
};

export const get_loggedIn_user = async () => {
  try {
    const authToken = JSON.parse(sessionStorage.getItem('user_access_token') as string);
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`,
    };
    const response = await axios.get(GET_LOGGED_IN_USER_DETAILS, { headers });
    console.log(response);


    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const uploadSingleImageToAWS = async (file: any) => {
  const formData = new FormData();
  formData.append("image", file);

  const url = await axios.post(
    GHC_AWS_URI, formData
  );

  return url;
};

export const sendFormSparkMail = async (formData: any) => {

  try {
    const data = await axios.post(FORMS_SPARK, formData);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
}