"use server";

import jwt from "jsonwebtoken";
import { axiosInstance } from "@/src/lib/axios";
import { TUser } from "@/src/types/user.interface";
import { cookies } from "next/headers";

export const signup = async (payload: FormData) => {
  try {
    const { data } = await axiosInstance.post("/auth/signup", payload);
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  }catch (error: any) {
    console.log(error);
    if (error?.response) {
      throw new Error(error?.response?.data?.message || "An error occured");
    } else {
      throw new Error(error.message || "Unexpected Error");
    }
  }
};

export const login = async (payload: Pick<TUser, "email" | "password">) => {
  try {
    const { data } = await axiosInstance.post("/auth/login", payload);
    if (data?.success) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }
    return data;
  } catch (error: any) {
    console.log(error);
    if (error?.response) {
      throw new Error(error?.response?.data?.message || "An error occured");
    } else {
      throw new Error(error.message || "Unexpected Error");
    }
  }
};

export const getUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  if (accessToken) {
    const decoded = await jwt.decode(accessToken);
    return decoded;
  } else {
    return null;
  }
};
export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};
