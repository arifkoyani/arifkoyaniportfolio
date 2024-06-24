import Image from "next/image";
import pic from "/public/mypic.svg"
import { motion } from "framer-motion";
const RightBox = () => {
  return (
    <>

<motion.div
        initial={{opacity:0,y:15}}
        animate={{opacity:1,y:0}}
        exit={{opacity:0,y:15}}
        transition={{
          delay:0.1,
          duration:1
        }}

    >
      <div className="h-[70vh] flex justify-center animate-pulse p-2 ">
      <Image
      src={pic}
      width={250}
      height={250}
      />
      </div>

      </motion.div>
    </>
  );
};
export default RightBox;
