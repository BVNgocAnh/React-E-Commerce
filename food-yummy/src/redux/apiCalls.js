import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerCustomerStart,
  registerCustomerSuccess,
  registerCustomertFailure,
} from "./customerRedux";
import { publicRequest } from "../requestMethod";

export const register = async (dispatch, customer) => {
  dispatch(registerCustomerStart());
  try {
    const res = await publicRequest.post("/auth/register", customer);
    dispatch(registerCustomerSuccess(res.data));
  } catch (error) {
    dispatch(registerCustomertFailure());
  }
};

export const login = async (dispatch, customer) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", customer);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
