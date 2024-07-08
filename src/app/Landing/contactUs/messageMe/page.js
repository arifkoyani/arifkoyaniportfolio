"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function MessageMe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
      AOS.init({ duration: 2000 });
  
  }, []);

  

  return (
    <main
      className={`flex min-h-screen bg-[#141c2789] flex-col items-center justify-between p-24 `}
    
    >
      <h1 data-aos="fade-up">
        You can Send Me{" "}
        <span className="font-bold text-[#6d67e4]">Anonymous</span> Messaage{" "}
      </h1>
      <div 
        className="visme_d"
        data-title="arifalikoyani"
        data-url="n0ew0qyn-arifalikoyani"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="80996"
      ></div>
    </main>
  );
}
