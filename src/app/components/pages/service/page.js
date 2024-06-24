import Image from "next/image";
import websitedesign from "/public/websitedesing.png";
import seo from "/public/seo.png";
import webhosting from "/public/webhosting.png";
import bugs from "/public/bugs.png"
const Service = () => {
  return (
    <>
      <div className="bg-[#f79b00]  flex flex-col items-center pt-5 pb-5">
        <div className="mb-10">
          <p className="text-5xl font-bold text-[#141c27]">
            INFORMATIONS & SERVICE
          </p>
        </div>

        <div>
          <span className="flex flex-col items-center">
            <p className="text-[#141c27] text-xl font-bold">
              Building Digital Success, One Pixel at a Time
            </p>
            <p>
              Transforming Ideas into Stunning Websites. Crafting Your Digital
              Success Story."
            </p>
            <span >
              <Image src={websitedesign} width={400}  className="animate-bounce "/>
            </span>
          </span>

          <span className="flex flex-col items-center">
            <p className="text-xl font-bold ">Rank Higher, Reach Further.</p>
            <p className="text-[#141c27]">
              Boost Your Visibility, Drive Your Success. Maximize Your Online
              Presence with Expert SEO
            </p>
            <span>
              <Image src={seo} width={400}   />
            </span>
          </span>

          <span className="flex flex-col items-center">
            <p className="text-xl font-bold text-[#141c27]">
              Reliable Hosting, Seamless Maintenance
            </p>
            <p className="text-[#141c27]">
              Strong Hosting, Smooth Maintenance. Your Website's Safe Haven.
            </p>
            <span>
              <Image src={webhosting} width={400} className="animate-bounce"  />
            </span>
          </span>

          <span className="flex flex-col items-center">
            <p className="text-xl font-bold text-[#141c27]">
            We squash bugs so your software shines
            </p>
            <p className="text-[#141c27]">
            The tiny gremlins wreaking havoc in your code, we're here to exterminate them for good
            </p>
            <span>
              <Image src={bugs} width={400}  />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};
export default Service;
