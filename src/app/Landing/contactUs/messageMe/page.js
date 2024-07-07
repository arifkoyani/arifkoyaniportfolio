"use client"
import { useEffect } from "react";
export default function MessageMe() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static-bundles.visme.co/forms/vismeforms-embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main
      className={`flex min-h-screen bg-[#141c27] flex-col items-center justify-between p-24 `}
    >
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
