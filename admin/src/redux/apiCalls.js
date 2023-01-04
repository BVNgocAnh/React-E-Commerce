import {
  loginFailure,
  loginStart,
  loginSuccess,
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} from "./customerRedux";
import { publicRequest, userRequest } from "../requestMethods";
import {
  getProductFailure,
  getProductSuccess,
  getProductStart,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
export const login = async (dispatch, customer) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", customer);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};
//PRODUCT
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

export const deleteProducts = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

export const updateProduct = async (id, dispatch, product) => {
  dispatch(updateProductStart());
  try {
    // update
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess(product));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

export const addProduct = async (product, dispatch) => {
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};

//CUSTOMER
export const getCustomers = async (dispatch) => {
  dispatch(getCustomerStart());
  try {
    const res = await userRequest.get("/customer");
    dispatch(getCustomerSuccess(res.data));
  } catch (err) {
    dispatch(getCustomerFailure());
  }
};

export const addCustomers = async (customer, dispatch) => {
  dispatch(addCustomerStart());
  try {
    const res = await userRequest.post(`/auth/register`, customer);
    dispatch(addCustomerSuccess(res.data));
  } catch (err) {
    dispatch(addCustomerFailure());
  }
};

export const deleteCustomers = async (id, dispatch) => {
  dispatch(deleteCustomerStart());
  try {
    const res = await userRequest.delete(`/customer/${id}`);
    dispatch(deleteCustomerSuccess(id));
  } catch (err) {
    dispatch(deleteCustomerFailure());
  }
};
