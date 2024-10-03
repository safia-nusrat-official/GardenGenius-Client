"use client";
import logo from "@/src/assets/logo.png";
import loginImg from "@/src/assets/images/plant-1.jpeg";
import { zodResolver } from "@hookform/resolvers/zod";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  HomeIcon,
} from "@/src/components/icons";
import { title } from "@/src/components/primitives";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React, { useEffect } from "react";
import { loginValidationSchema } from "@/src/schemas/authSchema";
import { useLogin } from "@/src/hooks/auth.hook";
import { useRouter, useSearchParams } from "next/navigation";
import { Spinner } from "@nextui-org/spinner";
import { useUser } from "@/src/context/user.provider";
import { FieldValues, SubmitHandler } from "react-hook-form";
import Image from "next/image";
import { fontCenturyGothicPro } from "@/src/config/fonts";
import { button } from "@nextui-org/theme";

const LoginPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { mutate: handleLogin, isPending, isSuccess } = useLogin();
  const router = useRouter();
  const user = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");

  const handleSubmit: SubmitHandler<FieldValues> = async (data: any) => {
    handleLogin(data);
    user && user.setLoading(true);
  };
  useEffect(() => {
    if (!isPending && isSuccess) {
      user && user.setLoading(false);
      router.push(redirect || "/");
    }
  }, [isPending, isSuccess]);

  return (
    <div className="grid grid-cols-2 mx-16 mt-8 mb-16 rounded-2xl shadow-sm border-[1px] border-zinc-200 overflow-hidden">
      {isPending && (
        <div className="fixed grid place-items-center inset-0 z-40 h-screen backdrop-blur-sm bg-black/25">
          <Spinner size="lg" color="white" />
        </div>
      )}
      <div className="relative">
        <div className="backdrop-blur-sm z-10">
          <h3>Join The community of millions</h3>
        </div>
        <Image alt="Plant" className="object-cover" fill src={loginImg}></Image>
      </div>
      <div className="grid p-12 text-center place-items-center selection:bg-[#ffffff13]">
        <h3 className={title({ size: "sm", className: "text-zinc-800" })}>
          Log In To
        </h3>
        <div className="flex">
          <Image src={logo} height={52} width={52} alt="logo"></Image>
          <h3
            className={`${fontCenturyGothicPro.className} font-bold md:text-4xl`}
          >
            GardenGenius
          </h3>
        </div>
        <p className="text-[#00000082]">Welcome Back, Let's Go!</p>
        <FXForm
          resolver={zodResolver(loginValidationSchema)}
          onSubmit={handleSubmit}
          defaultValues={{
            email: "safia.nusrat@official.com",
            password: "Password$123",
          }}
          className="flex flex-col gap-4 w-full"
        >
          <FXInput name="email" type="email" label="Email"></FXInput>
          <FXInput
            name="password"
            endContent={
              <button
                className="focus:outline-none"
                type="button"
                onClick={toggleVisibility}
                aria-label="toggle password visibility"
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            type={isVisible ? "text" : "password"}
            label="Password"
          />
          <Button
            type="submit"
            isLoading={isPending}
            className={button({ className: "mt-8 rounded-full", color:"primary" })}
          >
            Login
          </Button>
          <span className="text-sm font-medium mx-auto mt-6">
            New here? No Worries,
            <Link href="/signup" className="ml-2" underline="hover">
              Sign Up!
            </Link>
          </span>
        </FXForm>
      </div>
    </div>
  );
};

export default LoginPage;
