"use client";

import Link from "next/link";

const Linkedin = () => {
  return (
    <div className="flex bg-[#141c27] justify-center">
     
     <Link href="https://www.linkedin.com/in/arifkoyani/" target="_blank">
    
      <button
        type="button"
        className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-[3px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 hover:shadow-[5px_0_15px_-3px_#f79b00, -5px_0_15px_-3px_#f79b00] transition-shadow duration-300"
      >
        <svg
          className="w-4 h-4 me-2"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M4.98 3.5C4.98 5.43 3.4 7 1.5 7 0.67 7 0 6.33 0 5.5S0.67 4 1.5 4c0.9 0 1.63 0.73 1.63 1.63C3.13 5.9 3.1 6 3.1 6h1.88C5 4.5 4.98 3.5 4.98 3.5zM4.92 8H1.12V20H4.92V8zM8.11 8H4.22V20H8.1V13.48C8.1 12.23 8.94 11.41 10.01 11.41C11.06 11.41 11.69 12.16 11.69 13.35V20H15.6V13.2C15.6 10.79 14.04 9.37 11.92 9.37C10.36 9.37 9.61 10.25 9.3 10.8H9.26V8H8.11z" />
        </svg>
        Connect with Me With Linkedin
      </button>

      </Link>
     
    </div>
  );
};

export default Linkedin;
