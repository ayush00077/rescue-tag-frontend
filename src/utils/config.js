export const BASE_URL = process.env.REACT_APP_BASE_URL;

export const PUBLIC_APIS = {
  signup: BASE_URL + "/auth/signup",
  login: BASE_URL + "/auth/login",
  verifyOtp:BASE_URL+ "/auth/verify-otp",
  forgetPassword:""
};

export const PROTECTED_APIS = {
  GET_USER_DETAILS: BASE_URL + "/user/get-user-details",
  SAVE_USER_DETAILS: BASE_URL + "/user/save-user-details",
};
