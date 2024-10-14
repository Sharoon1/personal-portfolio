"use client";
import React from "react";
import Button from "./button";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";
import Link from "next/link";

function FrontPage() {
  return (
    <div className="fcontainer " id="frontpage-section">
      <div className="  text-allTextC  flex flex-col-reverse lg:flex-row lg:flex flex-1 items-center lg:justify-between mx-10 my-10">
        <div>
          <h1 className="text-textColor">
            Hi, I&apos;m <span className="text-hoverColor">Sharoon!</span>{" "}
            <br />{" "}
            <Typewriter
              words={["Full Stack Developer", "Digital Marketer", "SEO Expert"]}
              loop={true}
              cursor
            />
            {/* <Typewriter
          words={['Hello!', 'Welcome to my site!', 'Enjoy your stay!']}
          loop={5}        // How many times to loop, or `true` for infinite
          cursor
          cursorStyle='|' // Custom cursor symbol
          typeSpeed={70}  // Typing speed (ms)
          deleteSpeed={50} // Deletion speed (ms)
          delaySpeed={1000} // Delay before typing next word (ms)
        /> */}
            <br /> Based in Pakistan
          </h1>
          <p className="w-3/5 my-8">
            Helping brands grow with expert Web Development, SEO, and powerful
            Digital & Traditional Marketing strategies to drive success.
            {/* I&apos;m a Pakistan Base web designer &amp; front-end developer
            certified from <span className="text-hoverColor">SMIT</span> */}
          </p>
          <div className="flex gap-x-4">
            <Link href="/#port">
              <Button text="Got a project" />
            </Link>
            <button className="hover:bg-textColor text-sm  font-bold px-10 py-3 border border-black rounded-md hover:text-white  p-4 hover:duration-300">
              lets go
            </button>
          </div>
          <div className="flex gap-x-4 my-10">
            <p className="border-2 border-acolor h-20 "></p>
            <div className="flex flex-col gap-y-2 mt-1">
              <p className="hover:text-acolor cursor-pointer">
                +92 327 0685230
              </p>
              <p className="hover:text-acolor cursor-pointer">
                sharoonsarfraz9@gmail.com
              </p>
              <p className="hover:text-acolor cursor-pointer">
                street 6,froaqabad,Faisalabad,Pakistan
              </p>
            </div>
          </div>
        </div>
        <div>
          <Image
            data-aos="zoom-out"
            data-aos-duration="1000"
            src="/fimg1-modified.png"
            alt="signature"
            height={400}
            width={770}
          />
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
