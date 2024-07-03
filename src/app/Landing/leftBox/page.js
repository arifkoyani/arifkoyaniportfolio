"use client";
import SocialMediaIcons from "./icons/page";
import DownloadBtn from "./button/page";
import { motion } from "framer-motion";


const LeftBox = () => {

console.log("this is code")
  return (
    <>
      <div className=" h-[70vh] bg-[#141c27] w-[50vw] flex items-center  p-[30px] text-white">
        <div className="flex-col  justify-left leftbox ">
         
         <span>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 1,
            }}
          >
            <h5 className="text-sm  mb-2">Hey! This is</h5>
          </motion.div>

          </span>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 1,
            }}
          >
            <h1 className="text-5xl  mb-1 font-extralight text-[#f79b00] leftname">
              ARIF ALI KOYANI
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 1,
            }}
          >
            <p className="mb-[5px] font-light ">Front-end Developer</p>
          </motion.div>

<span >
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              duration: 1,
            }}
          >
            <SocialMediaIcons />
            <DownloadBtn />
          </motion.div>

          </span>
        </div>
      </div>
    </>
  );
};
export default LeftBox;
