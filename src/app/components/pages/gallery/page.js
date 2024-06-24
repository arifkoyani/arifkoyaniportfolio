"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import pic from "/public/ZZ5H.gif"
import { motion } from "framer-motion";
import Image from "next/image";
const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos"
        );
        console.log(response.data);
        setPhotos(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="h-[90vh] p-10 bg-[#141c27]">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{
              delay: 0.1,
              duration: 1,
            }}
          ></motion.div>

          <h1 className="flex flex-col items-center mb-[100px] text-white">
            <span className="font-bold text-[50px] text-[#d78905]">
              Every picture tells a story
            </span>
            <div>
              <Image
              src={pic}
              width={30}
              alt="nature_image"
              />
            </div>
          </h1>

          <motion.div />
        </div>
      ) : (
        <div className="bg-[#141c27] p-10 flex flex-col items-center">
          <h1 className="flex flex-col items-center mb-10 text-white">
            <span className="font-bold text-[50px] text-[#d78905]">
              Every picture tells a story
            </span>
          </h1>

          <div className="grid grid-cols-4 gap-10 justify-center  bg-[#141c27] ">
            {photos.slice(0, 20).map((e) => (
              <div key={e.id}>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 15 }}
                  transition={{
                    delay: 0.1,
                    duration: 1,
                  }}
                >
                  <img
                    onClick={() => alert("this is sample image")}
                    src={`${e.thumbnailUrl}`}
                    width={200}
                    height={200}
                    className="h-auto max-w-full rounded-lg"
                    alt="image"
                  />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Gallery;
