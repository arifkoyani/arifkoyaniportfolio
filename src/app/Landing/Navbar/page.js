"use client";
import Link from "next/link";
const Navbar = () => {
  return (
    <>
      <nav className="bg-[#141c27] p-8 shadow-xlg shadow-black/50 flex justify-around text-[#f79b00]">
        <div>
          <h1 className="font-bold text-xs">
            {" "}
            ARIF
            <span className="text-white text-xs">KOYANI</span>
          </h1>
        </div>

        <div>
          <ul className="flex gap-6 text-white  font-extralight ">
            <Link href="/">
              {" "}
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                Home
              </li>
            </Link>
            <Link href="/pages/service">
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                Service
              </li>
            </Link>

            <Link href="/pages/about">
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                About
              </li>
            </Link>

            <Link href="/pages/gallery">
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                Gallery
              </li>
            </Link>
            <Link href="/pages/projects">
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                Project
              </li>
            </Link>
            <Link href="/pages/contact">
              <li className="hover:text-[#f79b00] duration-700 cursor-pointer">
                Contact
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
