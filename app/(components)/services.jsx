"use client";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import Button from "./button";

function Services() {
  return (
    <div className="py-10 mx-10 " id="services">
      <div>
        <p>-SERVICES</p>
        <h3 className="text-textColor ">My Services</h3>
      </div>
      <div className="my-10  grid-col-1 md:grid-cols-2 grid lg:grid-cols-3  gap-4">
        {/* aos 1*/}
        <a onClick={() => document.getElementById("my_modal_01").showModal()}>
          <div className="" data-aos="fade-down-right" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">01</p>
              <h4 className="text-textColor">Web Developer</h4>
              <p>
                I develop contemporary, responsive websites and robust
                applications, handling all aspects from front-end design to
                back-end programming.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        {/* first module */}
        <dialog id="my_modal_01" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/webuse.jpg"
              alt="wed image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold">Web Development</h2>
            <p>
              I provide comprehensive full-stack development services, ensuring
              your web applications are both visually stunning and highly
              functional. Whether it’s building responsive front-end interfaces
              or developing secure, scalable back-end systems, I handle it all.
            </p>
            <p>
              With expertise in React.js for dynamic user interfaces and Next.js
              for server-side rendering, I create fast, SEO-friendly websites.
              My back-end development involves Node.js for building APIs and
              business logic, while I use Prisma for database management. I work
              with databases like MongoDB and MySQL to ensure seamless data
              handling and real-time functionality. Additionally, I integrate
              cloud services like Firebase for authentication and storage,
              ensuring the security and performance of your web applications.
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
        {/* aos 2*/}
        <a onClick={() => document.getElementById("my_modal_02").showModal()}>
          <div className="" data-aos="zoom-in" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">02</p>
              <h4 className="text-textColor">SEO</h4>
              <p>
                I enhance your sites search engine position, increasing organic
                traffic through optimized content, technical SEO, and strategic
                keyword usage.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        <dialog id="my_modal_02" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/seouse.jpg"
              alt="seo image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold">
              SEO (Search Engine Optimization)
            </h2>
            <p>
              My SEO services are designed to improve your site’s visibility on
              search engines like Google, ensuring you attract the right
              audience and increase organic traffic. By analyzing and optimizing
              your website’s structure and content, I help you rank higher and
              generate more leads.
            </p>
            <p>
              My approach includes comprehensive keyword research to target the
              right audience, on-page SEO (improving meta tags, headers, and
              content), and off-page SEO (backlinking strategies). I also
              perform technical SEO audits to fix site issues like broken links,
              slow loading times, and crawl errors. Additionally, I provide
              content optimization strategies to improve engagement, making sure
              that your website not only ranks but converts visitors into
              customers.
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
        {/* aos 3*/}
        <a onClick={() => document.getElementById("my_modal_03").showModal()}>
          <div className="" data-aos="fade-down-left" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">03</p>
              <h4 className="text-textColor">Digital Marketing</h4>
              <p>
                I design tailored digital marketing plans that elevate brand
                awareness, engagement, and conversions across multiple online
                channels.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        <dialog id="my_modal_03" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/digitaluse.jpg"
              alt="ditital image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold"> Digital Marketing</h2>
            <p>
              I help businesses grow their digital presence through strategic
              marketing campaigns tailored to your specific goals. Whether you
              want to improve brand awareness, boost conversions, or increase
              engagement, I create custom marketing plans designed to deliver
              measurable results.
            </p>
            <p>
              My digital marketing services include social media marketing
              (creating engaging content for platforms like Facebook, Instagram,
              LinkedIn, and Twitter), email marketing (building effective email
              campaigns that nurture leads), and paid advertising (Google Ads,
              Facebook Ads). I specialize in conversion rate optimization (CRO)
              to ensure that every visitor has the highest potential of becoming
              a customer. Additionally, I monitor and analyze campaign
              performance, providing data-driven insights for continuous
              improvement.
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
        {/* aos 1*/}
        <a onClick={() => document.getElementById("my_modal_04").showModal()}>
          <div className="" data-aos="fade-up-right" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">04</p>
              <h4 className="text-textColor">Affiliate Marketing</h4>
              <p>
                I create visually compelling designs that effectively
                communicate your brands message, including logos, brochures, and
                social media graphics.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        <dialog id="my_modal_04" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/affilateuse.jpg"
              alt="weaffilate image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold">Affiliate Marketing</h2>
            <p>
              I assist businesses in setting up and managing profitable
              affiliate marketing programs that expand their reach and drive
              sales. Whether you are new to affiliate marketing or want to scale
              an existing program, I provide the tools and strategies needed to
              boost your revenue.
            </p>
            <p>
              My services include affiliate program setup, where I help you
              select the right platforms (such as Amazon Associates, ShareASale,
              or CJ Affiliate) and develop attractive offers to entice
              affiliates. I also create affiliate recruitment strategies to
              bring in high-quality partners who align with your brand.
              Additionally, I provide affiliate performance tracking to monitor
              results and optimize campaigns, ensuring a high return on
              investment (ROI). I also offer promotional content creation, from
              banners to email templates, to support affiliates in promoting
              your products or services effectively.
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
        {/* aos 2 */}
        <a onClick={() => document.getElementById("my_modal_06").showModal()}>
          <div className="" data-aos="fade-up-left" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">06</p>
              <h4 className="text-textColor text-xl">Business Development</h4>
              <p>
                I identify growth opportunities and forge strategic partnerships
                that enhance your business market presence and drive revenue.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        <dialog id="my_modal_06" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/businessuse.jpg"
              alt="buseness image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold">Business Development</h2>
            <p>
              I specialize in business development strategies that help you
              identify growth opportunities, forge partnerships, and expand your
              market presence. My goal is to support your business in achieving
              sustainable growth and maximizing profitability.
            </p>
            <p>
              My business development services encompass market research to
              identify potential opportunities, strategic planning to outline
              actionable steps for growth, and partnership development to create
              valuable collaborations. I also assist in crafting sales
              strategies and pitches to attract new clients and retain existing
              ones. Additionally, I provide insights on industry trends and
              competitive analysis, ensuring your business stays ahead of the
              curve. Together, we can create a roadmap that drives your business
              forward.
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
        {/* aos 2*/}
        <a onClick={() => document.getElementById("my_modal_05").showModal()}>
          <div className="" data-aos="zoom-in" data-aos-duration="1000">
            <div className=" border p-10 border-allTextC rounded-sm">
              <p className="text-lg">05</p>
              <h4 className="text-textColor">Graphic Designing</h4>
              <p>
                I create visually compelling designs that effectively
                communicate your brands message, including logos, brochures, and
                social media graphics.
              </p>
              <div className="flex">
                <p className="text-textColor">Read More </p>
                <p>
                  <FontAwesomeIcon
                    className="w-3 m-1 text-textColor"
                    icon={faArrowRight}
                  />
                </p>
              </div>
            </div>
          </div>
        </a>
        <dialog id="my_modal_05" className="modal backdrop-blur-2xl ">
          <div className="modal-box max-w-3xl p-20 space-y-2">
            <Image
              src="/graphicuse.jpg"
              alt="graphic image"
              width={1500}
              height={100}
            />
            <h2 className="text-textColor font-bold">Graphic Designing</h2>
            <p>
              I offer professional graphic design services to help your brand
              stand out and effectively communicate its message. From creating
              logos to developing marketing materials, I ensure your visuals are
              both captivating and aligned with your brand identity.
            </p>

            <p>
              My graphic design services include logo design, brochures, flyers,
              and social media graphics. I utilize industry-standard design
              software to create visually appealing and high-quality graphics. I
              focus on understanding your brands vision and target audience to
              create designs that resonate and drive engagement. Whether you
              need branding for a new product or refresh your existing
              materials, I am committed to delivering creative solutions that
              enhance your brands presence.
            </p>
            <div className="modal-action">
              <form method="dialog">
                <Button text="close" />
              </form>
            </div>
          </div>
        </dialog>
      </div>
      <video
        className="mt-20"
        style={{ height: "400px", width: "100%  " }}
        src="/portVideo.mp4"
        autoPlay
        muted
        controls
        loop
      ></video>
    </div>
  );
}

export default Services;
