import { http } from "@/app/utils/http";

/**
 * Login and Registration API
 */
export const loginReg = {
  login: (payload: any) => http.post("/loginReg/login", payload),
  getTitle: (payload: any) => http.post("/loginReg/getTitle", payload),
  getInterest: (payload: any) => http.post("/loginReg/getInterest", payload),
  registration: (payload: any) => http.post("/loginReg/registration", payload),
  emailVerifiy: (payload: any) => http.post("/loginReg/emailVerifiy", payload),
  sendEmail: (payload: any) => http.post("/loginReg/sendEmail", payload),
  sendOtp: (payload: any) => http.post("/loginReg/sendOtp", payload),
  otpVerifiy: (payload: any) => http.post("/loginReg/otpVerify", payload),
  getUserFail: (payload: any) => http.post("/loginReg/getUserFail", payload),
  addUserFail: (payload: any) => http.post("/loginReg/addUserFail", payload),
};
