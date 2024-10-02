import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Kbd } from "@nextui-org/kbd";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
} from "@/src/components/icons";
import { fontCenturyGothicPro } from "@/src/config/fonts";
import Image from "next/image";
import Logo from "@/src/assets/logo.png";
import { Button } from "@nextui-org/button";
import { button } from "../primitives";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white px-14"
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:mx-auto",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:w-1/3",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-green-400",
        ],
      }}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image src={Logo} alt="GardenGenius Logo" width={32} height={32} />
            <p className={`${fontCenturyGothicPro.className} text-xl`}>
              GardenGenius
            </p>
          </NextLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item: any) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="font-medium flex relative h-full items-center data-[active=true]:after:absolute data-[active=true]:after:bottom-0 data-[active=true]:after:left-0 data-[active=true]:after:right-0 data-[active=true]:after:mx-auto data-[active=true]:after:h-[2px] data-[active=true]:after:w-1/3 data-[active=true]:after:rounded-[2px] data-[active=true]:after:bg-green-400"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
        <NavbarItem className="hidden ml-8 sm:flex gap-2">
          <NextLink href="/login" className={button({ className: "px-8" })}>
            Login
          </NextLink>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex gap-2">
          <NextLink
            href="/signup"
            className={button({ className: "px-8", color: "secondary" })}
          >
            Signup
          </NextLink>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="flex lg:hidden">
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
