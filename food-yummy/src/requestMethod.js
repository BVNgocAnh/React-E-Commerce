import axios from "axios";

const BASE_URL = "http://localhost:3000/server/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc0YjE3OWIyM2NjYzY3MDM1ODc4MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NzAzNTM4MDUsImV4cCI6MTcwMTg4OTgwNX0.aCAyyZQYgDctxIxGf7uWv01NEuD5Ls5Kkm05mCf2Mlo";
// JSON.parse(
//   JSON.parse(localStorage.getItem("persist:root")).customer
// ).currentCustomer.accessToken;

console.log(TOKEN);
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `thisistoken ${TOKEN}` },
});
