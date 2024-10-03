export const USER_ROLE = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type TUser = {
  name: string;
  email: string;
  mobileNumber: string;
  password: string;
  profilePhoto?:string
  role: keyof typeof USER_ROLE;
  _id:string;
};
