import { Link } from "@nextui-org/link";
import React from "react";
import {
  DiscordIcon,
  FaceBookIcon,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  TwitterIcon,
} from "../icons";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { button } from "../primitives";
import { Divider } from "@nextui-org/divider";

const Footer = () => {
  return (
    <footer className="bg-primary  md:p-16">
      <div className=" md:gap-28 flex justify-between items-start">
        <div className="text-white ">
          <h3 className="font-semibold text-4xl">GardenGenius</h3>
          <p className="max-w-lg text-white/75 text-sm my-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, earum
            commodi. Odio molestiae ipsum quasi expedita culpa libero quisquam
            rem commodi veniam, neque tenetur. Corrupti a voluptates nemo cum?
            Nam!
          </p>
          <div className="mb-6 mt-10 grid gap-x-4 md:grid-cols-3">
            <p className="text-white/75 flex gap-2 text-sm">
              <PhoneIcon></PhoneIcon> Contact Us
            </p>
            <p className="text-white/75 flex gap-2 text-sm">
              <LocationIcon></LocationIcon>Our Location
            </p>

            <p className="text-white/75 flex gap-2 text-sm">
              <MailIcon size={12}></MailIcon>Help Desk
            </p>
            <Link underline="hover" className="text-white">
              +01 0122442824
            </Link>
            <Link className="text-white">Terms & Conditions</Link>
            <Link underline="hover" className="text-white">
              garden.genius@help.com
            </Link>
          </div>
          <div className="flex gap-2">
            <DiscordIcon></DiscordIcon>
            <TwitterIcon></TwitterIcon>
            <FaceBookIcon></FaceBookIcon>
          </div>
        </div>
        <div>
          <p className="mb-2 text-xl font-medium text-white">
            Get the freshest GardenGenius news
          </p>
          <div className="flex p-1 border-1 rounded-full items-center mb-4">
            <input
              className="w-full text-[#fff] bg-transparent px-4 outline-none border-none"
              placeholder="Your email here"
            ></input>
            <Button
              radius="none"
              className={button({ color: "secondary", className: "px-8 py-4" })}
            >
              Subscribe
            </Button>
          </div>
          <Checkbox
            classNames={{ label: "text-white/75 text-sm " }}
            className="data-[selected=true]:bg-transparent data-[selected=true]:border-white data-[hover=true]:bg-transparent"
          >
            By checking the box, you agree that you are at least 16 years of
            age.
          </Checkbox>
        </div>
      </div>
      <Divider className="my-6 bg-white/25"></Divider>
      <div className="flex justify-between">
        <ul className="flex gap-4 list-disc">
          <li>
            <Link underline="hover" href="/" className="text-white/75 text-sm">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/" underline="hover" className="text-white/75 text-sm">
              Terms Of Service
            </Link>
          </li>
          <li>
            <Link href="/" underline="hover" className="text-white/75 text-sm">
              Legal Notices
            </Link>
          </li>
        </ul>
        <p className="text-white/75">
          &copy; 2024 GardenGenius. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
