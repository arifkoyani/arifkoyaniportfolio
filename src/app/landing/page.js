"use client";
import Leftbox from "./LeftBox/LeftBox";
import RightBox from "./rightbox/page";
import PointsBar from "./pointsbar/page";
import Aboutme from "./aboutme/page";
import Myskills from "./myskills/page";
import ContactUS from "./contactUs/page";
import Reviews from "./Reviews/page";
const Landing = () => {
  return (
    <>
      <div className="w-[100%] bg-[#141c27] flex justify-around">
        <Leftbox />
        <RightBox />
      </div>
      <PointsBar />
      <Aboutme />
      <Myskills />
      <ContactUS />
      <Reviews />
    </>
  );
};
export default Landing;
