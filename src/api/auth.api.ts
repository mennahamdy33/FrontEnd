import api from "../lib/api";

type SignUpData = {
  email: string;
  name: string;
  password: string;
};

export const signupRequest = (data: SignUpData) => {
  return api.post("/user/signup", data);
};

export const verifyEmailRequest = (token: string) => {
  return api.post(`/user/verify-email?token=${token}`);
};

type SignInData = {
  email: string;
  password: string;
};

export const signinRequest = (data: SignInData) => {
  return api.post("/user/login", data);
};

export const getProfileRequest = () => {
  return api.get("/user/profile");
};