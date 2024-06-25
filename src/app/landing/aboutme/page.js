"use client";
import Image from "next/image";
import pic from "/public/webwork.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="text-white bg-[#141c27] flex h-[100vh] ">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 1 }}
        className="bg-[#141c27] w-[50vw] pl-[10px]"
      >
        <div className="flex flex-col gap-[30px] pt-[100px] justify-center items-center p-10">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[30px]">THIS IS ABOUT ME</h1>
            <div className="w-[11vw] h-1 bg-slate-50"></div>
          </div>
          <p className="text-[14px] leading-10">
          🌐 Hey there! I'm Arifkoyani, a passionate web developer and front-end engineer 🎨. Specializing in Next.js, I craft stunning, responsive websites that offer seamless user experiences 📱💻. With a knack for design and a love for coding, I bring ideas to life with clean, efficient code ✨. My work reflects creativity and precision, ensuring every project is both beautiful and functional 🌟. Let's turn your vision into reality together! 🚀 #WebDeveloper #FrontEndEngineer #NextJS #CreativeCoding <b className="font-bold">........More</b>
          </p>
        </div>
      </motion.div>




      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 1, duration: 2 }}
        className="flex   w-[50vw] justify-center"
      >
        <Image src={pic} width={470} alt="web_work" />
      </motion.div>
    </div>
  );
};

export default AboutMe;
