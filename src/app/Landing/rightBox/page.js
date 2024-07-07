"use client"
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
        <div>
          <Image
            src={pic}
            width={300}
              height={300}
            alt="profile"
          />
        </div>
      </motion.div>
    </>
  );
};

export default RightBox;
