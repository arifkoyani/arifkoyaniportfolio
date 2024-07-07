"use client";
import Image from "next/image";
import pic from "/public/arif.png";
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
        <div
          className="flex justify-center h-full items-center w-[50vw]"
         
        >
          <Image src={pic} width={300} height={250} alt="profile" />
        </div>
      </motion.div>
    </>
  );
};

export default RightBox;
