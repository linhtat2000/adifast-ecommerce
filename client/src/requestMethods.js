import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMjYxYjU1YzRhNTQwNWM1NDkwYjc5ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Njk4NjcyMywiZXhwIjoxNjQ3MDczMTIzfQ.m9u2EqYolhVd3yfuZ51qLMbWCimwITgs56ZO3z6YqaI";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
