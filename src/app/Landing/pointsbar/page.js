"use client";
import LandingFooter from "../../landingFooter/page";
import { motion } from "framer-motion";
const PointsBar = () => {
  return (
    <>
      <div className="bg-black h-[15vh]  flex text-white justify-evenly items-center">
        <div>
          <LandingFooter />
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
          >
            <p className="font-bold"> 6+</p>
            <p>Years Experienced</p>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
          >
            <p className="font-bold">500+</p>
            <p>live projects</p>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
          >
            <p className="font-bold">2000+</p>
            <p>psd to HTML</p>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
          >
            <p className="font-bold">2000+</p>
            <p>psd To HTML</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default PointsBar;
