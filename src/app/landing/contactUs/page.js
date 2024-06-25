"use client";
import Image from "next/image";
import location from "/public/contactus/location.png";
import whatsapp from "/public/contactus/whatspp.png";
import gmail from "/public/contactus/gmal.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import HeartCircle from "./like/page";

const ContactUS = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const userEmail = form.current.user_email.value;
    const userMessage = form.current.message.value;

    if (!userEmail || !userMessage) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "Please enter both email and message",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    emailjs
      .sendForm("service_dfpm1ad", "template_82y9pqa", form.current, "7gBM1707Wr9w3eWCl")
      .then(
        () => {
          console.log("SUCCESS!");

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="h-[100vh] bg-[#141c27] flex items-center justify-center">
      <div className="flex gap-10 bg-[#141c27] rounded-lg shadow-2xl">
        <div className="w-[40vw] flex flex-col justify-between pb-8 text-white pl-[20px]">
         <span>
          <h1 className="text-4xl font-bold mb-6">CONTACT INFO</h1>
          <div className="flex items-center gap-2 mb-4">
            <Image src={location} width={20} height={20} alt="location icon" />
            <span>Jutial Gilgit, PAKISTAN</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={gmail} width={20} height={20} alt="email icon" />
            <span>arifkoyani@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <Image src={whatsapp} width={20} height={20} alt="phone icon" />
            <span>+092 03010104990</span>
          </div>
          </span>
          <span>
  <HeartCircle/>
          </span>
        </div>
        <div className="w-[40vw] flex flex-col justify-center p-8 text-white bg-[#4a4033] rounded-lg">
          <h1 className="text-4xl font-bold mb-6">Message Us</h1>
          <p className="mb-4">
            We&apos;d love to hear from you! Send us a message using the form below,
            or email us.
          </p>

          <form ref={form} onSubmit={sendEmail}>
            <input
              type="text"
              placeholder="Full Name"
              name="user_name"
              className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-[#d78905]"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-[#d78905]"
            />
            <label htmlFor="message" className="mb-2">
              Your Message Here
            </label>
            <textarea
              id="message"
              rows="4"
              name="message"
              placeholder="Type your message..."
              className="w-full p-3 mb-4 text-black rounded-lg outline-none focus:ring-2 focus:ring-[#d78905]"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#d78905] text-white rounded-lg hover:bg-[#b67604] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
