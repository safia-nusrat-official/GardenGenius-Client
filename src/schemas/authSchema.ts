import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z
    .string({
      required_error: "Email is required!",
    })
    .trim()
    .email("Please provide a valid email address."),
  password: z
    .string({
      required_error: "Password is required!",
    })
    .min(6, "Password must be atleast 6 charcters."),
});

export const signupValidationSchema = z.object({
  email: z.string().trim().email("Invalid Email Address"),
  password: z
    .string()
    .min(6, "Password must be atleast 6 charcters.")
    .max(16, "Password cannot be more than 16 charcters."),
  name: z.string().min(1, "Name is Required"),
  mobileNumber: z.string().min(1, "Mobile Number is Required"),
});
