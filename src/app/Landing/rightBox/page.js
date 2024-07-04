"use client"
import Image from "next/image";
import pic from "/public/mypic.svg";
import { motion } from "framer-motion";

const RightBox = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{
          delay: 0.1,
          duration: 1,
        }}
      >
        <div className=" flex justify-center items-center animate-pulse p-2">
          <Image
            src={pic}
            height={100}
            alt="profile"
            className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </motion.div>
    </>
  );
};

export default RightBox;
