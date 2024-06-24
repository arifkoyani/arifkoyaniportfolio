"use client";
import Image from "next/image";
import pic from "/public/webwork.png";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="text-white bg-[#141c27] flex h-[100vh] pt-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ duration: 1 }}
        className="bg-[#141c27] w-[50vw] p-[60px]"
      >
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold text-[30px]">THIS IS ABOUT ME</h1>
            <div className="w-[11vw] h-1 bg-slate-50"></div>
          </div>
          <p className="text-[14px] leading-5">
            A project is a planned set of tasks that are carried out to achieve a specific goal. It may involve collaboration with others, and often has a defined timeline, budget, and resources. Projects can be undertaken by individuals or teams, and can range from simple everyday tasks to complex, large-scale undertakings. Effective project management involves organizing and prioritizing tasks, monitoring progress, and adapting to changes as needed. Good project management skills can help individuals and teams to meet deadlines and achieve their goals. <b className="font-bold">More</b>
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 15 }}
        transition={{ delay: 1, duration: 2 }}
        className="flex justify-center items-center w-[50vw]"
      >
        <Image src={pic} width={470} alt="web_work" />
      </motion.div>
    </div>
  );
};

export default AboutMe;
