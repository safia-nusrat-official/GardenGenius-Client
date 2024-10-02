import { button, title } from "@/src/components/primitives";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import heroImg from "@/src/assets/hero-img.png";
import React from "react";
import { Link } from "@nextui-org/link";

const HeroSection = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 w-full">
      <div className="flex pl-0 md:pl-20 justify-center items-start flex-col ">
        <h1 className={title({ color: "primary" })}>
          <p className="inline">Grow </p>
          <p className="inline bg-[#dad7cd] mb-2 dark:bg-[#588157]">Together</p>
           ,<span className="block">Share Your</span>
          <p className="underline pb-4 decoration dark:decoration-[#588157] decoration-[#dad7cd] decoration-wavy">
            Gardening{" "}
          </p>
          Wisdom
        </h1>
        <p className="mt-2 font-medium text-lg dark:text-zinc-400 text-zinc-600 max-w-sm dark:selection:bg-[#a3b18a]/25">
          Discover a space where passionate gardeners come together to grow
          smarter.
        </p>
        <Button
          size="lg"
          className={button({
            className: "mt-8 px-8",
          })}
        >
          Join Us Today
        </Button>
      </div>
      <div className="overflow-hidden">
        <Image width={500} height={500} alt="hero" src={heroImg}></Image>
      </div>
    </div>
  );
};

export default HeroSection;
