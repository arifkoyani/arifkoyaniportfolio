import Image from "next/image";
import apple from "/public/apple.png";
import playstore from "/public/playstore.png";
import socialMedia from "/public/socialicons.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#141c27]">
        <div className="flex flex-wrap bg-black text-white text-[7px] pt-5 pb-5 justify-around items-center">
          <div className="text-[8px] flex-col">
            <h1 className="font-bold text-xs mb-2">
              ARIF<span className="text-[#e79203] text-xs">KOYANI</span>
            </h1>
            <span>
              <p className="mb-2">
                B ANG.in Address : Jl.
                <br /> Ring Road Utara, Ngringin, Condongcatur,
                <br />
                Kec. Depok, Kabupaten <br /> Sleman, Daerah Istimewa Yogyakarta
                55281
                <br /> +62 812 234 6789 buangin@services.id
              </p>
              <p>
                +092 03188278882
                <br />
                arifkoyani@gmail.com
              </p>
            </span>
          </div>
          <div className="flex flex-col gap-2 p-1 items-center">
            <h1 className="text-xs">COMPANY</h1>
            <div className="flex flex-col gap-3">
              <p>about</p>
              <p>career</p>
              <p>Mobile</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 p-1 items-center">
            <h1 className="text-xs">CONTACT</h1>
            <span className="flex flex-col gap-3">
              <p>helpFAQS</p>
              <p>Press</p>
              <p>Affilates</p>
            </span>
          </div>
          <div className="flex flex-col gap-2 p-1 items-center">
            <h1 className="text-xs">MORE</h1>
            <span className="flex flex-col gap-3">
              <p>free code</p>
              <p>packages</p>
              <p>Task</p>
            </span>
          </div>
          <div className="flex flex-col gap-3 p-1 items-center">
            <h1 className="text-xs text-center">DISCOVER OUR SERVICE</h1>
            <span>
              <span className="flex gap-2">
                <Image src={apple} width={70} height={70} />
                <Image src={playstore} width={70} height={70} />
              </span>
            </span>
            <span>
              <Image src={socialMedia} width={90} height={90} />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
