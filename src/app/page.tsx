"use client";
import Landing from "../app/Landing/page";
import Footer from "./pages/Footer/page";
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
