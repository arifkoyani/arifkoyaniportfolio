"use client";
import SocialMediaIcons from "./icons/page";
import DownloadBtn from "./button/page";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const LeftBox = () => {
  console.log("this is code");
  return (
    <>
      <div className="  bg-[#141c2700] w-[50vw]  justify-end flex items-center  text-white">
        <div className="flex-col leftbox ">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 1,
              }}
            >
              <h5 className="text-sm  mb-5">Hey! This is</h5>
            </motion.div>
          </div>

          <div className="mb-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 1,
              }}
            >
              <h1 className="text-5xl font-extralight text-[#f79b00] leftname">
                ARIF ALI KOYANI
              </h1>
            </motion.div>
          </div>

          <div className="mb-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 1,
              }}
            >
              <p className="mb-[5px] font-light ">
                {/* Front-end Developer */}
                <Typewriter
                  options={{
                    strings: ["I'm", "Front-End Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </p>
            </motion.div>
          </div>

          <div className="mb-5">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              transition={{
                duration: 1,
              }}
            >
              <div className="mb-5">
                <SocialMediaIcons />
              </div>
              <div>
                <DownloadBtn />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeftBox;
