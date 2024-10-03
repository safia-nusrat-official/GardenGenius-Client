import { cookies } from "next/headers";

export const getAccessToken = () => cookies().get("accessToken")?.value
export const getRefreshToken = () => cookies().get("refreshToken")?.value