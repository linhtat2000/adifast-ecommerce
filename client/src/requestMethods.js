import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjYxYjU1YzRhNTQwNWM1NDkwYjc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NjcyNTA0MSwiZXhwIjoxNjQ2ODExNDQxfQ.5nRYWFSbVCnm0Eo9A4m6F0CsAUOep4HJUv9c_6C2M5I";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
