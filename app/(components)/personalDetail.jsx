"use client";
import React from "react";
import Button from "./button";
import { Typewriter } from "react-simple-typewriter";

function PersonalDetail() {
  return (
    <div className="mx-10 py-10" id="about">
      <div className="lg:flex  md:justify-between ">
        <div className=" md:w-4/12">
          <p>-NICE TO MEET YOU</p>
          <div className="my-5">
            <h3 className="text-textColor">Sharoon Sarfraz</h3>
            {/* to see this latter */}
            <p>
              Web Developer & {""}
              <Typewriter
                words={["Digital Marketer", "SEO Expert"]}
                loop={true}
                cursor
              />
            </p>
          </div>
          <Button text="Got a project?" />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-y-6  lg:mt-0 mt-10">
          <p>
            Hello! I’m{" "}
            <span className="text-hoverColor font-bold">Sharoon Sarfraz,</span>{" "}
            a passionate and dedicated professional committed to delivering
            exceptional results in my work.
          </p>
          <p>
            With a strong foundation in design principles and a keen interest in
            learning new technologies, I&apos; excited about the opportunities
            ahead. I&apos;m committed to continuously enhancing my skills and
            knowledge to deliver outstanding results for every project I
            undertake.
          </p>

          <ol className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <span className="text-sm border-b-2">AGE</span>
              <br />
              <span className="text-textColor font-bold">25</span>
            </li>
            <li>
              <span className="text-sm border-b-2">BORN IN</span>
              <br />
              <span className="text-textColor font-bold">Pakistan</span>
            </li>
            <li>
              <span className="border-b-2 text-sm">City</span>
              <br />
              <span className="text-textColor font-bold"> Faisalabad</span>
            </li>
            <li>
              <span className="border-b-2 text-sm">PHONE</span>
              <br />
              {""}
              <span className="text-textColor font-bold"> +92418777246</span>
            </li>
          </ol>
        </div>
      </div>
      {/* second Section */}
      <div className="my-24">
        <ol className="grid md:grid-cols-2 lg:grid-cols-3   lg:space-x-6 ">
          <li
            className="flex text-center p-16 flex-col m-1  bg-boxbg"
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <h2 className="text-textColor">1+</h2>
            <p>YEARS OF EXPERIENCE</p>
          </li>
          <li
            className="flex text-center p-16 flex-col m-1 bg-sboxbg"
            data-aos="flip-up"
            data-aos-duration="1000"
          >
            <h2 className="text-textColor ">5</h2>
            <p>PROJECT COMPLETED</p>
          </li>
          <li
            className="flex text-center p-16 flex-col m-1 bg-bgfront"
            data-aos="flip-right"
            data-aos-duration="1000"
          >
            <h2 className="text-textColor">5</h2>
            <p>HAPPY CLIENTS</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default PersonalDetail;
