"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast } from "react-toastify";
function Contect() {
  const [loading, setloading] = useState(false);
  const handlesubmit = (e) => {
    e.preventDefault();
    setloading(true);
    const parms = {
      from_name: document.getElementById("name").value,
      from_email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        parms,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(() => {
        toast.success("Successfully Sended", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setloading(false);
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
      })
      .catch((error) => {
        console.error("Failed to send email:", error);
      });
  };
  return (
    <div className="mx-10  gap-x-32 py-20 lg:flex" id="contact">
      <div className="flex flex-1 gap-y-5 flex-col">
        <p>- LET&apos;S CONNECT</p>
        <h3 className="text-textColor">Get in touch</h3>
        <p>
          I&apos;m currently avaliable to take on new projects, so feel free to
          send me a message about anything that you want to run past me. You can
          contact anytime at 24/7
        </p>
        <p>+92 306 6079142</p>
        <a className="text-allTextC" href="mailto:sharoonsarfraz95@gmail.com">
          sharoonsarfraz@gmail.com
        </a>
        <a href="https://maps.app.goo.gl/eAFikUw84M7J32tu6"></a>
      </div>
      <div className="flex-1">
        <form className="flex  gap-y-5  flex-col">
          <input
            id="name"
            type=" text"
            className="bg-white border outline-none p-2"
            placeholder="Enter your name"
            required
          />
          <input
            id="email"
            type="text"
            className="bg-white border p-2 outline-none"
            placeholder="Your email"
            required
          />
          <textarea
            id="message"
            className="bg-white border outline-none p-2 "
            placeholder="Write something.."
            rows={8}
            required
          />
          <button
            onClick={handlesubmit}
            className="  hover:bg-white sm:mx-32 bg-textColor text-white text-sm  font-bold px-10 py-3 border border-black rounded-md hover:text-black  p-4 hover:duration-300"
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contect;
