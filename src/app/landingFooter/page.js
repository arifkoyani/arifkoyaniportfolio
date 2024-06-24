import Image from "next/image";
import pic from "/public/blob.svg";
const LandingFooter = () => {
  return (
    <>
      <Image src={pic} width={200} height={200} 
      alt="shape"
      />
    </>
  );
};
export default LandingFooter;
