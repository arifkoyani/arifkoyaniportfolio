"use client"
import Linkedin from "./button/page";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HellWorld = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-[#141c2789]">
        <div className="w-max" data-aos="zoom-in">
          <h1 className=" hellowordtext animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-3xl text-white font-light">
            I&apos;m Into Software Engineering..............!.
          </h1>
        </div>
      </div>
    </>
  );
};

export default HellWorld;
