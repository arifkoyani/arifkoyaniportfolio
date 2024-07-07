"use client";
import LeftBox from "./leftBox/page";
import RightBox from "./rightBox/page";
import PointsBar from "./pointsBar/page";
import AboutMe from "./aboutMe/page";
import MySkills from "./mySkills/page";
import ContactUS from "./contactUs/page";
import Reviews from "./Reviews/page";
import HellWorld from "./HelloWorld/page";
import Linkedin from "./HelloWorld/button/page";
import QRcode from "./qrCode/page";
import MessageMe from "./contactUs/messageMe/page";

const Landing = () => {
  return (
    <>
      <div className="w-[100%] bg-[#141c27] flex justify-center  items-center leftandright">
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
      <MessageMe />
      <Reviews />
    </>
  );
};

export default Landing;
