"use client";
import Image from "next/image";
import pic from "/public/webwork.png";
import { motion } from "framer-motion";
import AOS from 'aos';
import { useEffect } from "react";
import 'aos/dist/aos.css';

const AboutMe = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="text-white bg-[#141c2789] flex aboutme">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 1 }}
        className="bg-[#141c27] w-[50vw] pl-[10px]"
      >
        
<div className="flex bg-[#141c2700] flex-col gap-[30px] pt-[100px] justify-center items-center p-10">
  <div className="flex flex-col gap-1 bg-[#141c2789]">
    <h1 className="font-bold text-[30px]" data-aos="fade-up">
      THIS IS ABOUT ME
    </h1>
    <div
      className="w-[11vw] h-1 bg-slate-50"
      data-aos="fade-up"
    ></div>
  </div>

  <div className="text-[14px] leading-10" data-aos="fade-up">
    <p>
      🌐 Hey there! I'm Arif Hussain, a{" "}
      <b>Full Stack Developer | AI Automation Engineer | AI Engineer</b>.
      <br />
      **Forward Deploy Engineer (FDE)**
      <br />
      Building AI-powered automation, full-stack applications, and
      intelligent solutions using modern technologies.
    </p>

    <p className="mt-4">
      <span className="text-green-400 font-semibold">
        ● Open to new opportunities
      </span>
    </p>

    <p className="mt-3">
      Explore my portfolio:{" "}
      <a
        href="https://www.arifkoyani.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline underline-offset-4 hover:text-blue-400"
      >
        arifkoyani
      </a>
    </p>

    <p className="mt-3">
      Try my project:{" "}
      <a
        href="https://www.khanpdf.com/url-to-pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold underline underline-offset-4 hover:text-blue-400"
      >
        download pdf from link
      </a>
    </p>
  </div>
</div>

      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 1, duration: 2 }}
        className="flex w-[50vw] justify-center bg-[#141c2789]"
      >
        <Image src={pic} width={470} alt="web_work"  
        data-aos="fade-up"
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
