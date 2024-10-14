"use client";
import React from "react";
import Button from "./button";
import Image from "next/image";
function Experience() {
  return (
    <div className="bg-lightExpC">
      <div className="mx-10 py-20 ">
        <div className="my-10 space-y-5">
          <p className="text-textColor">-Experience</p>
          <h2 className="text-textColor">Everything about me!</h2>
        </div>
        {/* start box */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          {/* aos 1*/}
          <div className="m-2" data-aos="fade-down" data-aos-duration="1000">
            <a
              className="btn"
              onClick={() => document.getElementById("my_modal_4").showModal()}
            >
              <div className="hover:scale-y-105 p-7 sm:p-14 space-y-2 bg-white">
                <div className="flex justify-between">
                  <p>-2023 - Present</p>
                  <p>-Envoat</p>
                </div>
                <h4 className="text-textColor ">Web Developer</h4>
                <p>
                  Web Development Building responsive and functional websites,
                  from front-end interfaces to back-end systems.
                </p>
              </div>
            </a>
            {/* /// model */}
            <dialog id="my_modal_4" className="modal backdrop-blur-2xl ">
              <div className="modal-box max-w-3xl p-20 space-y-2">
                <Image
                  src="/web.png"
                  alt="wed image"
                  width={1500}
                  height={100}
                />
                <h2 className="text-textColor font-bold">Web Development</h2>
                <h3 className="text-sm text-textColor">
                  Front-End Development
                </h3>
                <p>
                  {" "}
                  Focuses on designing user-friendly interfaces using HTML, CSS,
                  JavaScript, and libraries such as Bootstrap and Tailwind CSS.
                  Expertise in creating responsive, mobile-first designs using
                  Flexbox, Grid, and media queries.
                </p>
                <h3 className="text-sm text-textColor">Back-End Development</h3>
                <p>
                  Covers server-side programming using Node.js, API creation,
                  and database management with MySQL and MongoDB. Includes
                  building RESTful APIs and integrating third-party services.
                </p>
                <h4 className="text-sm text-textColor">
                  Deployment & Maintenance:{" "}
                </h4>
                <p>
                  Managing and maintaining websites and web apps on cloud
                  platforms like Vercel and Heroku, ensuring regular updates and
                  bug fixes.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    {/* <button className="btn">Close</button> */}
                    <Button text="close" />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
          {/* aos 2  */}
          <div className="m-2" data-aos="fade-down" data-aos-duration="1000">
            <a
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              <div className=" hover:scale-y-105 p-7 sm:p-14 space-y-2  bg-white">
                <div className="flex justify-between">
                  <p>-2022 - Present</p>
                  <p>-Envoat</p>
                </div>
                <h4 className="text-textColor ">Digital Marketing </h4>
                <p>
                  Digital Marketing Promoting products or brands through various
                  digital channels to engage customers.
                </p>
              </div>
            </a>
            {/* /// model */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box max-w-3xl p-20 space-y-2">
                <Image
                  src="/digital.png"
                  alt="digital image"
                  width={1500}
                  height={100}
                />
                <h2 className="text-textColor font-bold">Digital Marketing</h2>
                <h3 className="text-sm text-textColor">Campaign Creation </h3>
                <p>
                  Skilled in creating targeted campaigns across platforms like
                  Facebook, Instagram, and Google Ads. Able to segment audiences
                  based on demographic, geographic, and behavioral data for
                  personalized marketing approaches.
                </p>
                <h3 className="text-sm text-textColor">Content Strategy</h3>
                <p>
                  Developing compelling content that aligns with brand identity,
                  using blogs, videos, and social media posts to engage users
                  and drive conversions.
                </p>
                <h3 className="text-sm text-textColor">
                  Analytics & Reporting
                </h3>
                <p>
                  Using tools like Google Analytics, SEMrush, and social media
                  insights to track campaign performance, optimize ad spend, and
                  generate comprehensive reports.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <Button text="close" />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* Ent of the first element */}

          {/* aos 3*/}
          <div className="m-2" data-aos="fade-down" data-aos-duration="1000">
            <a
              className="btn"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <div className="hover:scale-y-105 p-7 sm:p-14 space-y-2 bg-white">
                <div className="flex justify-between">
                  <p>-2022 - Present</p>
                  <p>-Envoat</p>
                </div>
                <h4 className="text-textColor">SEO Expert </h4>
                <p>
                  SEO Expert Optimizing websites to rank higher in search engine
                  results.
                </p>
              </div>
            </a>
            {/* /// model */}
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box p-20 space-y-2 max-w-3xl">
                <Image
                  src="/seo.png"
                  alt="SEO image"
                  width={1500}
                  height={100}
                />
                <h2 className="text-textColor font-bold">SEO Expert</h2>
                <h3 className="text-sm text-textColor">On-Page Optimization</h3>
                <p>
                  Extensive experience in improving meta tags, headings, URL
                  structures, and alt text to ensure better indexing and
                  relevance for search engines.
                </p>
                <h3 className="text-sm text-textColor">
                  Off-Page SEO & Backlinking
                </h3>
                <p>
                  {" "}
                  Skilled in building high-quality backlinks through outreach,
                  guest posting, and partnerships, improving domain authority
                  and boosting organic rankings.
                </p>
                <h3 className="text-sm text-textColor">Keyword Research</h3>
                <p>
                  {" "}
                  Proficient in conducting keyword analysis using tools like
                  Google Keyword Planner and SEMrush, identifying high-traffic,
                  low-competition keywords to drive organic traffic.
                </p>
                <h3 className="text-sm text-textColor">Technical SEO</h3>
                <p>
                  Expertise in optimizing website speed, mobile usability,
                  schema markup, and sitemaps to ensure search engine-friendly
                  websites.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <Button text="close" />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* aos 4 */}
          <div className="m-2" data-aos="fade-down" data-aos-duration="1000">
            <a
              className="btn"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              <div className="hover:scale-y-105 p-7 sm:p-14 space-y-2 bg-white">
                <div className="flex justify-between">
                  <p>-2019 - Present</p>
                  <p>-Envoat</p>
                </div>
                <h4 className="text-textColor">Affiliate Marketing</h4>
                <p>
                  Affiliate Marketing Promoting products and earning commissions
                  through affiliate links.
                </p>
              </div>
            </a>
            {/* /// model */}
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box max-w-3xl p-24 space-y-2">
                <Image
                  src="/afilate.jpg"
                  alt="affilate image"
                  width={1500}
                  height={100}
                />
                <h2 className="text-textColor font-bold">
                  Affiliate Marketing
                </h2>
                <h3 className="text-sm text-textColor">Affiliate Platforms </h3>
                <p>
                  {" "}
                  Familiarity with major affiliate networks like Amazon
                  Associates, ClickBank, and ShareASale, understanding how to
                  select high-converting products and strategically promote
                  them.
                </p>
                <h3 className="text-sm text-textColor">
                  Conversion Rate Optimization (CRO)
                </h3>
                <p>
                  {" "}
                  Using data-driven strategies to improve landing pages, CTAs,
                  and user journeys to maximize affiliate conversions.
                </p>
                <h3 className="text-sm text-textColor">Performance Tracking</h3>
                <p>
                  Monitoring and optimizing affiliate links using tracking
                  software and Google Analytics to measure the success of
                  campaigns, refine strategies, and increase sales.
                </p>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button, it will close the modal */}
                    <Button text="Close" />
                  </form>
                </div>
              </div>
            </dialog>
          </div>
          {/* // */}
        </div>
      </div>
    </div>
  );
}

export default Experience;
