import Image from "next/image";
import pic from "/public/facebook.png";
import twitter from "/public/twitter.png";
import insta from "/public/insta.png";
import Link from "next/link";
const SocialMediaIcons = () => {
  return (
    <>
      <div className="flex gap-5">
        <Link href="https://www.facebook.com/arifkoyani/" target="_blank">
          <Image src={pic} width={30} height={20} className="cursor-pointer" />
        </Link>

        <Link href="https://www.youtube.com/" target="_blank">
          <Image
            src={twitter}
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </Link>

        <Link href="https://www.instagram.com/arifkoyani/" target="_blank">
          <Image
            src={insta}
            width={27}
            height={15}
            className="cursor-pointer"
          />
        </Link>
      </div>
    </>
  );
};

export default SocialMediaIcons;
