"use client"
import Image from "next/image";
import ai from "/public/myskills/ai.png";
import canva from "/public/myskills/canva.png";
import ES6 from "/public/myskills/ES6.png";
import excel from "/public/myskills/excel.png";
import nextt from "/public/myskills/NEXT.png";
import js from "/public/myskills/js.png";
import ps from "/public/myskills/ps.png";
import ReactImg from "/public/myskills/React.png"; 
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Myskills = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="flex flex-col items-center justify-center  pt-60 bg-[#141c2789] gap-5 ">
        <div data-aos="fade-up"> 
          <h1
            className="font-bold text-[30px] text-[#f79b00] skillsnames"
          >
            MY SKILLS
          </h1>
        </div>

        <div className="flex gap-4 p-2 justify-around bg-[#141c2789] skills " data-aos="fade-up">
          <Image
            src={nextt}
            width={100}
            height={100} // Add height to avoid layout shift
            alt="Next.js"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={ES6}
            width={100}
            height={100}
            alt="ES6"
            className="hover:scale-125 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={js}
            width={100}
            height={100}
            alt="JavaScript"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={ReactImg}
            width={100}
            height={100}
            alt="React"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={canva}
            width={100}
            height={100}
            alt="Canva"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={ai}
            width={100}
            height={100}
            alt="AI"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={excel}
            width={100}
            height={100}
            alt="Excel"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
          <Image
            src={ps}
            width={100}
            height={100}
            alt="Photoshop"
            className="hover:scale-150 transition duration-200 ease-in-out cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Myskills;
