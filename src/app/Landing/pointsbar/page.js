"use client";
import CountUp from "react-countup";
import { motion } from "framer-motion";
const PointsBar = () => {
  return (
    <>
      <div className="bg-black p-5 flex text-white justify-evenly items-center pointsbar">
      
        <div className="flex justify-center items-center">
      
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
              <CountUp start={0} end={6}>
                {" "}
              </CountUp>
              +
            </p>
            <p className="font-light">Years Experienced</p>
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
              <CountUp start={0} end={500}>
                {" "}
              </CountUp>
              +
            </p>
            <p className="font-light">live projects</p>
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
              <CountUp start={0} end={3000}>
                {" "}
              </CountUp>
              +
            </p>
            <p className="font-light">psd to HTML</p>
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
              <CountUp start={0} end={2000}>
                {" "}
              </CountUp>
              +
            </p>
            <p className="font-light">Figma To HTML</p>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default PointsBar;
