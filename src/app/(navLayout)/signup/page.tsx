"use client";

import { Avatar, AvatarGroup, AvatarIcon } from "@nextui-org/avatar";
import logo from "@/src/assets/logo.png";
import signupImg from "@/src/assets/images/plant-1.jpeg";
import FXForm from "@/src/components/form/FXForm";
import FXInput from "@/src/components/form/FXInput";
import { Breadcrumbs, BreadcrumbItem } from "@nextui-org/breadcrumbs";
import {
  EyeFilledIcon,
  EyeSlashFilledIcon,
  HomeIcon,
} from "@/src/components/icons";
import { button, title } from "@/src/components/primitives";
import { signupValidationSchema } from "@/src/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import React, { useEffect, useState } from "react";
import { FieldValues } from "react-hook-form";
import { TUser } from "@/src/types/user.interface";
import { useSignup } from "@/src/hooks/auth.hook";
import { Spinner } from "@nextui-org/spinner";
import { useRouter, useSearchParams } from "next/navigation";
import { useUser } from "@/src/context/user.provider";
import { fontCenturyGothicPro } from "@/src/config/fonts";
import { Input } from "@nextui-org/input";
import Image from "next/image";

const SignUpPage = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const { mutate: handleSignup, isPending, isSuccess } = useSignup();
  const router = useRouter();
  const userContext = useUser();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect");
  const [image, setImage] = useState<File | string>("");

  const handleSubmit = async (data: FieldValues) => {
    const formData = new FormData();

    formData.append("data", JSON.stringify(data));
    formData.append("profilePhoto", image);

    setImage("");
    handleSignup(formData);
    userContext && userContext.setLoading(true);
  };

  useEffect(() => {
    if (!isPending && isSuccess) {
      userContext && userContext.setLoading(false);
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

      <div className="grid p-8 text-center place-items-center selection:bg-[#ffffff13]">
        <h3 className={title({ size: "sm", className: "text-zinc-800" })}>
          Sign Up With
        </h3>
        <div className="flex">
          <Image src={logo} height={52} width={52} alt="logo"></Image>
          <h3
            className={`${fontCenturyGothicPro.className} font-bold md:text-4xl`}
          >
            GardenGenius
          </h3>
        </div>
        <p className="text-[#00000082] font-medium">Hurry Up, Join Us Today!</p>
        <FXForm
          onSubmit={handleSubmit}
          resolver={zodResolver(signupValidationSchema)}
          defaultValues={{
            email: "safia.nusrat@official.com",
            password: "Password$123",
            name: "Safia Nusrat",
            mobileNumber: "01935685043",
          }}
          className="flex flex-col gap-4 mt-6 w-full"
        >
          <div className="flex flex-col items-center gap-2">
            {typeof image !== "string" ? (
              <Image
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full max-h-[150px] aspect-square object-cover border-1 p-2 border-zinc-300"
                src={URL.createObjectURL(image)}
              ></Image>
            ) : (
              <Image
                alt="avatar"
                width={150}
                height={150}
                className="rounded-full object-cover"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              ></Image>
            )}
            <Button
              className="m-0"
              as="label"
              size="sm"
              color="primary"
              htmlFor="image"
            >
              {image ? "Change" : "Upload"} Profile Photo
              <Input
                className="hidden"
                onChange={(e) => setImage(e.target.files![0])}
                id="image"
                type="file"
                required
                multiple
              />
            </Button>
          </div>
          <FXInput type="text" name="name" label="Name"></FXInput>
          <FXInput type="email" name="email" label="Email"></FXInput>
          <FXInput
            type="text"
            name="mobileNumber"
            label="Phone Number"
          ></FXInput>
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
            className={button({ className: "mt-8" })}
            isLoading={isPending}
            isDisabled={!image}
          >
            Sign Up
          </Button>
          <span className="text-sm mt-6 mx-auto">
            Already have an account?
            <Link
              href="/login"
              underline="hover"
              className="ml-2 font-semibold"
            >
              Login!
            </Link>
          </span>
        </FXForm>
      </div>

      <div className="relative">
        <div className="backdrop-blur-sm z-10">
          <h3>Join The community of millions</h3>
        </div>
        <Image
          alt="Plant"
          className="object-cover"
          fill
          src={signupImg}
        ></Image>
      </div>
    </div>
  );
};

export default SignUpPage;
