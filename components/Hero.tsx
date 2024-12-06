"use client";

import Button from "./Button";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
 
import Particles from "@/components/magicui/particles";
 
  

const Hero = () => {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <section className="max-container padding-container  gap-20 py-10 pb-32 md:gap-28 lg:py-20  mb-24">
      <div className="z-20 flex flex-col">
        <div className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          <h3 className="text-3xl mt-48  bold-52 lg:bold-88 capitalize tracking-tight text-center sm:text-5xl text-gray-700">
            Innovate and trailblaze as a sustainable leader
          </h3>
        </div>
        <p className=" relative regular-16  pl-[24px] text-gray-30 mt-6 w-[300]  text-center">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
      </div>
      <div className=" flex flex-row-reverse mt-4 pl-[24px]  sm:flex-row items-center justify-center ">
        <Button
          type="button"
          title="Learn More"
          variant="btn_dark_green_outline "
        />
      </div>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl  px-7 py-8"></div>
      </div>
      <hr />
    </section>
  );
};

export default Hero;
