"use client";
import LeftBox from "./leftBox/page";
import RightBox from "./rightbox/page";
import PointsBar from "./pointsbar/page";
import AboutMe from "./aboutme/page";
import MySkills from "./myskills/page";
import ContactUS from "./contactUs/page";
import Reviews from "./Reviews/page";
import HellWorld from "./HelloWorld/page";
import Linkedin from "./HelloWorld/button/page"
import QRcode from "../Landing/QRcode/page"

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
      <QRcode />
      <Reviews />
      
    </>
  );
};

export default Landing;
