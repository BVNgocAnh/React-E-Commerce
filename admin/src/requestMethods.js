import axios from "axios";

const BASE_URL = "http://localhost:3000/server/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzODc0YWVkOWIyM2NjYzY3MDM1ODc4MSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MDUyMjczMywiZXhwIjoxNzAyMDU4NzMzfQ.3D1D_03_h5f6fY-kRSQkytvV-KqJCALsemp04Tw7Ick";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `thisistoken ${TOKEN}` },
});
