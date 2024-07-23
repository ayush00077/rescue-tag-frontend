import { PROTECTED_APIS } from "../utils/config";
import { apiErrorHandler, PROTECTED_API_REQ } from "../utils/configAxios";

export const getUserDetails = async () => {
  try {
    const response = await PROTECTED_API_REQ.get(PROTECTED_APIS.GET_USER_DETAILS);
    console.log(response);
    return { data: response.data.data, status: response.status };
  } catch (err) {
    return apiErrorHandler(err);
  }
}

export const saveUserDetails = async (data) => {
  try {
    const response = await PROTECTED_API_REQ.post(PROTECTED_APIS.SAVE_USER_DETAILS, data);
    return { data: response.data.data, status: response.status };
  } catch (err) {
    return apiErrorHandler(err);
  }
}