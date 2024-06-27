"use client";
import CountUp from "react-countup";
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
            <p className="font-bold"> 
              
            <CountUp start={0} end={6}> </CountUp>
              +</p>
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
            <p className="font-bold">
            <CountUp start={0} end={500}> </CountUp>
            +
              
              </p>
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
            <p className="font-bold">
            <CountUp start={0} end={3000}> </CountUp>
              +</p>
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
            <p className="font-bold">
            <CountUp start={0} end={2000}> </CountUp>
    +</p>
            <p>Figma To HTML</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default PointsBar;
