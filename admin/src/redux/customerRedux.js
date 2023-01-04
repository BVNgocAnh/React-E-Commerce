import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    currentCustomer: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentCustomer = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logout: (state) => {
      state.currentUser = null;
    },
    //GET ALL USER
    getCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentCustomer = action.payload;
    },
    getCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //ADD CUSTOMER
    addCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentCustomer.push(action.payload);
    },
    addCustomertFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //DELETE USER
    deleteCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentCustomer.splice(
        state.currentCustomer.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteCustomerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  getCustomerStart,
  getCustomerSuccess,
  getCustomerFailure,
  addCustomerStart,
  addCustomerSuccess,
  addCustomerFailure,
  deleteCustomerStart,
  deleteCustomerSuccess,
  deleteCustomerFailure,
} = customerSlice.actions;

export default customerSlice.reducer;
