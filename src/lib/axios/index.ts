
import { getAccessToken } from "@/src/utils/getCookie";
import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"http://localhost:5000/api/v1"
});


export const axiosSecure = axios.create({
  baseURL:"http://localhost:5000/api/v1",
})

axiosSecure.interceptors.request.use(
  (config) => {
  const accessToken = getAccessToken()
  if(accessToken){
    config.headers.Authorization = accessToken
  }
  return config;
}, (err)=>Promise.reject(err))