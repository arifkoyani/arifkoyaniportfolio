"use client";
import Image from "next/image";
import { useState } from "react";
import hhh from "/public/emojies/hhh.gif";
import angry from "/public/emojies/angry.gif";
import care from "/public/emojies/care.gif";
import love from "/public/emojies/love.gif";
import sad from "/public/emojies/sad.gif";
import like from "/public/emojies/like.gif";
import wow from "/public/emojies/wow.gif";


const HeartCircle = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [likes, setLikes] = useState(987);

  const handleImageClick = (imageSrc) => {
    if (activeImage === imageSrc) {
      setActiveImage(null); 
      setLikes(likes - 1);
    } else {
      setActiveImage(imageSrc); 
      setLikes(likes + 1);
    }
  };

  return (
    <div className="flex justify-center items-center gap-1 bg-[#141c27] p-2 text-white Reaction">
      <div className="flex gap-2">

      <Image
          src={like}
          width={30}
          alt="like emoji"
          onClick={() => handleImageClick(like)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === like ? "border-2 border-[#f79b00]" : ""
          }`}
        />

<Image
          src={love}
          width={30}
          alt="love emoji"
          onClick={() => handleImageClick(love)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === love ? "border-2 border-[#f79b00]" : ""
          }`}
        />
         <Image
          src={care}
          width={30}
          alt="care emoji"
          onClick={() => handleImageClick(care)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === care ? "border-2 border-[#f79b00]" : ""
          }`}
        />

        <Image
          src={hhh}
          width={30}
          alt="hhh emoji"
          onClick={() => handleImageClick(hhh)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === hhh ? "border-2 border-[#f79b00]" : ""
          }`}
        />
         <Image
          src={wow}
          width={30}
          alt="hhh emoji"
          onClick={() => handleImageClick(hhh)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === hhh ? "border-2 border-[#f79b00]" : ""
          }`}
        />
       <Image
          src={sad}
          width={30}
          alt="sad emoji"
          onClick={() => handleImageClick(sad)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === sad ? "border-2 border-[#f79b00]" : ""
          }`}
        />
        <Image
          src={angry}
          width={30}
          alt="angry emoji"
          onClick={() => handleImageClick(angry)}
          className={`w-8 h-8 cursor-pointer rounded-full ${
            activeImage === angry ? "border-2 border-[#f79b00]" : ""
          }`}
        />
       
       
        
      </div>
      <span className=" text-[#f79b00] text-sm pl-2">
        {likes}{" "}
        <span className="text-[#f79b00] font-[30px]"> PUBLIC REACTIONS</span>
      </span>
    </div>
  );
};

export default HeartCircle;
