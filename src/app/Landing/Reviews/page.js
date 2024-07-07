"use client";
import Image from "next/image";
import profilePic from "/public/arif.png";
import a from "/public/usersdp/a.png";
import b from "/public/usersdp/b.png";
import e from "/public/usersdp/e.png";

const Reviews = () => {
  return (
    <>
      <div className="flex justify-center items-center h-[210px] bg-[#141c27]">
        <div className="max-w-2xl mx-auto bg-[#141c27]  text-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-4 text-center border-b pb-4">
            Reviews From Clients
          </h2>
          <p className="text-[15px] leading-relaxed text-center">
            Our clients love us! Here are some of the reviews from our valued
            customers.
          </p>
        </div>
      </div>
      <div className="flex justify-center gap-5 bg-[#141c27] pt-[20px] pb-[20px] overflow-hidden relative">
        <div className="flex gap-5 animate-slide">
          <div className="max-w-md bg-[#d78905] text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={profilePic}
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">Alan Simmons</h2>
                <p className="text-sm">CEO Burd</p>
              </div>
            </div>
            <p className="text-sm">
              &quot;Arifkoyani is an exceptional web developer. His attention to
              detail and commitment to delivering high-quality work are
              unparalleled. The website he created for us exceeded our
              expectations in both functionality and design. Highly
              recommended!&quot;
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-10 h-10 bg-white text-red-600 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
              </div>
            </div>
          </div>

          <div className="max-w-md bg-[#d78905] text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={a}
                  alt="Profile-Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">Brooklyn Simmons</h2>
                <p className="text-sm">
                  &quot; CEO Alphabet Inc. (Google&apos;s parent company) &quot;
                </p>
              </div>
            </div>
            <p className="text-sm">
              &quot;Working with Arifkoyani was a fantastic experience. He understood
              our requirements perfectly and translated them into a stunning and
              user-friendly website. His technical skills and creativity truly
              set him apart. We couldn&apos;t be happier with the result.&quot;
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-10 h-10 bg-white text-red-600 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
              </div>
            </div>
          </div>

          <div className="max-w-md bg-[#d78905] text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={b}
                  alt="Profile Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">Satya Nadella</h2>
                <p className="text-sm">CEO Microsoft Corporation</p>
              </div>
            </div>
            <p className="text-sm">
              &quot;Arifkoyani is a true professional in web development. He was able
              to take our vision and bring it to life with incredible precision
              and flair. His expertise and dedication ensured that our project
              was completed on time and exceeded all our expectations. We look
              forward to working with him again!&quot;
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-10 h-10 bg-white text-red-600 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
              </div>
            </div>
          </div>

          <div className="max-w-md bg-[#d78905] text-white rounded-lg shadow-lg p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 relative">
                <Image
                  src={e}
                  alt="myProfile-Picture"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className="ml-4">
                <h2 className="text-xl font-bold">Tim Cook</h2>
                <p className="text-sm">CEO Apple Inc.</p>
              </div>
            </div>
            <p className="text-sm">
              &quot;Arifkoyani has an exceptional talent for web development. He
              delivered a sleek, responsive, and visually stunning website that
              perfectly met our needs. His ability to combine technical
              expertise with creative design makes him a standout developer. We
              highly recommend his services!&quot;
            </p>
            <div className="flex justify-center mt-4">
              <div className="w-10 h-10 bg-white text-red-600 flex items-center justify-center rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                ></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-slide {
          animation: slide 20s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Reviews;
