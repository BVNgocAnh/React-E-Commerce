import { createSlice } from "@reduxjs/toolkit";

const customerSlice = createSlice({
  name: "customer",
  initialState: {
    currentCustomer: null,
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
    //Register
    registerCustomerStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    registerCustomerSuccess: (state, action) => {
      state.isFetching = false;
      state.currentCustomer.push(action.payload);
    },
    registerCustomertFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerCustomerStart,
  registerCustomerSuccess,
  registerCustomertFailure,
} = customerSlice.actions;
export default customerSlice.reducer;
