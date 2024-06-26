"use client";
import LeftBox from "./leftBox/page.js";
import RightBox from "./rightbox/page.js";
import PointsBar from "./pointsbar/page.js";
import AboutMe from "./aboutme/page.js";
import MySkills from "./myskills/page.js";
import ContactUS from "./contactUs/page.js";
import Reviews from "./Reviews/page.js";
import HellWorld from "./HelloWorld/page.js";
import Linkedin from "./HelloWorld/button/page.js"

const Landing = () => {
  return (
    <>
      <div className="w-[100%] bg-[#141c27] flex justify-around">
        <LeftBox />
        <RightBox />
      </div>
      <PointsBar />
      <HellWorld/>
      <Linkedin/>
      <AboutMe />
      <MySkills />
      <ContactUS />
      <Reviews />
    </>
  );
};

export default Landing;
