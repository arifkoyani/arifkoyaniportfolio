"use client";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Message() {
  const notify = () => {

    toast.error("Please! Put Email and Message", {
        data: {
          title: "Please! Put Email and Message",
          text: "Please! Put Email and Message ",
        },
      });
  };

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
}

export default Message;
