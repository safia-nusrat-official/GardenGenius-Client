"use client";
import { User } from "@nextui-org/user";
import Logo from "@/src/assets/logo.png";
import { useUser } from "@/src/context/user.provider";
import { Link } from "@nextui-org/link";
import React from "react";
import { Divider } from "@nextui-org/divider";
import Image from "next/image";
import { fontCenturyGothicPro } from "@/src/config/fonts";
import { siteConfig } from "@/src/config/site";
import { Button } from "@nextui-org/button";
import { ChevronLeft, FeedIcon, HomeIcon, InfoIcon, LogoutIcon, PhoneIcon } from "../icons";
import { logout } from "@/src/services/auth";
import { usePathname, useRouter } from "next/navigation";
import { protectedRoutes } from "@/src/constants/global";

const SideBar = () => {
  const user = useUser();
  const router = useRouter();
  const pathname = usePathname();
  const handleLogout = () => {
    logout();
    user && user.setLoading(true);
    if (protectedRoutes.some((route) => pathname.match(route))) {
      router.push("/login");
    }
  };
  const sideBarIcons = {
    Home: <HomeIcon></HomeIcon>,
    Feed: <FeedIcon></FeedIcon>,
    "Contact Us": <PhoneIcon></PhoneIcon>,
    "About Us": <InfoIcon></InfoIcon>,
  } as const;

  return (
    <aside className="flex flex-col justify-start h-screen bg-zinc-200/50 shadow-sm border-1 rounded-r-2xl p-6 ">
      <div className="flex items-center gap-4">
        <Link href="/" className="">
          <Image src={Logo} alt="GardenGenius Logo" width={32} height={32} />
          <p className={`${fontCenturyGothicPro.className} text-xl`}>
            GardenGenius
          </p>
        </Link>
        <Button isIconOnly variant="ghost"><ChevronLeft></ChevronLeft></Button>
      </div>

      <ul className="flex mt-6 flex-col">
        {siteConfig.navMenuItems.map((item, index) => (
          <li key={`${item}-${index}`}>
            <Link
              isBlock
              className="font-medium flex gap-2 w-full"
              href={item.href}
              size="md"
              anchorIcon={sideBarIcons[item.label as keyof typeof sideBarIcons]}
              showAnchorIcon
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <Divider className="my-6"></Divider>

      <div className="justify-self-end">
        {!user?.loading && user?.user && (
          <User
            name={<p className="font-medium">{user?.user.name}</p>}
            description={
              <Link href="/user/profile" size="sm" isExternal>
                {user?.user.email}
              </Link>
            }
            avatarProps={{
              src: user?.user.profilePhoto,
            }}
          />
        )}
        <Button onClick={()=>handleLogout()} className="font-medium text-primary w-full mt-4" endContent={<LogoutIcon></LogoutIcon>}>Logout</Button>
      </div>
    </aside>
  );
};

export default SideBar;
