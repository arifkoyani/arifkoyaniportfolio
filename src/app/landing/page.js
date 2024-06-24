"use client";
import LeftBox from "../Landing/LeftBox/LeftBox";
import RightBox from "../Landing/rightbox/page";
import PointsBar from "../Landing/pointsbar/page";
import AboutMe from "../Landing/aboutme/page";
import MySkills from "./myskills/page";
import ContactUS from "./contactUs/page";
import Reviews from "./Reviews/page";

const Landing = () => {
  return (
    <>
      <div className="w-[100%] bg-[#141c27] flex justify-around">
        <LeftBox />
        <RightBox />
      </div>
      <PointsBar />
      <AboutMe />
      <MySkills />
      <ContactUS />
      <Reviews />
    </>
  );
};

export default Landing;
