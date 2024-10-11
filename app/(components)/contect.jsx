import React from "react";
import Button from "./button";

function Contect() {
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
            type=" text"
            className="bg-white border outline-none p-2"
            placeholder="Enter your name"
            required
          />
          <input
            type="text"
            className="bg-white border p-2 outline-none"
            placeholder="Your email"
            required
          />
          <textarea
            className="bg-white border outline-none p-2 "
            placeholder="Write something.."
            rows={8}
            required
          />
          <Button text="subment" />
        </form>
      </div>
    </div>
  );
}

export default Contect;
