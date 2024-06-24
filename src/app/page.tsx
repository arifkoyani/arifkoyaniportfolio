"use client";
import Landing from "./Landing/page";
import Footer from "../app/pages/footer/page";
import Navbar from "./Landing/navbar/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <Footer />
    </>
  );
}
