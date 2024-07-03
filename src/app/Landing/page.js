"use client";
import LeftBox from "./leftBox/page";
import RightBox from "./rightBox/page";
import PointsBar from "./pointsBar/page";
import AboutMe from "./aboutMe/page";
import MySkills from "./mySkills/page";
import ContactUS from "./contactUs/page";
import Reviews from "./reviews/page";
import HellWorld from "./helloWorld/page";
import Linkedin from "./HelloWorld/button/page";
import QRcode from "../landing/qrCode/page";

const Landing = () => {
  return (
    <>
      <div className="w-[100%] bg-[#141c27] flex justify-around leftandright">
        <LeftBox />
        <RightBox />
      </div>
      <PointsBar />
      <HellWorld />
      <Linkedin />
      <AboutMe />
      <MySkills />
      <ContactUS />
      <QRcode />
      <Reviews />
    </>
  );
};

export default Landing;
