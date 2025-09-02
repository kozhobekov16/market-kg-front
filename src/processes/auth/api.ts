import axios from 'axios';
import {EndPath} from "@/shared";

export const authApi = {
  sendOtp: async (phoneNumber: string) => {
    const formData = new FormData();
    formData.append('phonesNumber', phoneNumber);
    await axios.post(EndPath.Auth.SendOTP, formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    });
  },

  verifyOtp: async (phoneNumber: string, code: string) => {
    const res = await axios.post(EndPath.Auth.RegistrUser, {
      PhoneNumber: phoneNumber,
      CodeOTP: Number(code),
      HasAgreedToPrivacyPolicy: true,
      ConsentToTheUserAgreement: true
    });
    return res.data;
  }
};