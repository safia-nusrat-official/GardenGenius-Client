import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { login, signup } from "@/src/services/auth/index";
import { TUser } from "@/src/types/user.interface";

export const useSignup = () => {
  return useMutation<any, Error, FormData>({
    mutationKey: ["signup"],
    mutationFn: async (user) => await signup(user),
    onSuccess: (data) => {
      console.log(data);
      toast.success("User created successfully!");
    },
    onError: (error) => {
      console.log(error);
      toast.error("Failed to create user!");
    },
  });
};
export const useLogin = () => {
  return useMutation<any, Error, TUser>({
    mutationKey: ["login"],
    mutationFn: async (user) => await login(user),
    onSuccess: (data) => {
      toast.success("User logged in successfully!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed to login user!");
    },
  });
};