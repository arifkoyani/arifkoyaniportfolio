"use client";
import React, { useState } from "react";
import Image from "next/image";
import pic from "/public/QRcode.gif";
import QRimage from "/public/QRarifkoyani.png";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";

const QRcode = () => {
  const [QRcode, setQRcode] = useState(false);
  const [loader, setloader] = useState(true);
  const GenerateQrcode = async () => {
    setloader(false);

    setTimeout(() => {
      setQRcode(true);
      setloader(true);
    }, 2000);
  };
  return (
    <>
      <div
        className="w-[100%]  bg-[#141c27]
      h-screen
      text-white flex flex-col justify-center items-center 
      gap-10
      pt-11
      "
      >
        <div className="h-[300px] flex justify-center items-center">
          {loader ? (
            <span>
              {QRcode ? (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{
                    duration: 1,
                  }}
                >
                  <Image src={QRimage} width={200} />
                </motion.div>
              ) : (
                <div className="W-[50vw] shadow-glow">
                  <Image src={pic} width={700} />
                </div>
              )}
            </span>
          ) : (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
            />
          )}
        </div>
        <div className="h-[100px]">
          <button
            type="button"
            class="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
            onClick={GenerateQrcode}
            disabled={QRcode}
          >
            {QRcode ? <spn>Scan Me</spn> : <span>Quick Generate QR Code</span>}
          </button>
        </div>
      </div>
    </>
  );
};
export default QRcode;
