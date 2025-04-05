"use client";
import React from "react";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Button from "./button";
function RecentProjects() {
  const swiperRef = useRef(null);
  // console.log("swiperREffffffffffff", swiperRef);

  const goNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };
  return (
    <div className="mx-10 py-20 flex flex-col gap-y-10" id="port">
      <div className="flex justify-between align-bottom">
        <div>
          <p className="mb-1">PROJECTS</p>
          <h4 className="text-textColor">Recent Completed Works</h4>
        </div>
        <div className="flex gap-2">
          <button onClick={goPrev}>
            <FontAwesomeIcon
              className="border-2 rounded-full p-3"
              icon={faArrowLeft}
            />
          </button>
          <button onClick={goNext}>
            <FontAwesomeIcon
              className="border-2 rounded-full p-3"
              icon={faArrowRight}
            />
          </button>
        </div>
      </div>
      <div>
        <Swiper
          navigation={{ prevEl: "", nextEl: "" }}
          loop={true}
          // slidesPerView={3}
          ref={swiperRef}
          spaceBetween={50}
          breakpoints={{
            // when window width is >= 1024px (large screens)
            1024: {
              slidesPerView: 3,
            },
            // when window width is >= 768px (medium screens)
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 640px (small screens)
            640: {
              slidesPerView: 1,
            },
            // when window width is < 640px (extra small screens)
            0: {
              slidesPerView: 1,
            },
          }}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="w-full h-full flex flex-col   ">
              <div className="overflow-hidden rounded-md">
                {" "}
                <Image
                  alt="mobile"
                  src="/ssmobile.jpg"
                  width={1000}
                  height={800}
                  className="inline-block hover:scale-125 duration-1000 transition-transform"
                />
              </div>
              <p className="inline-block">YOUTUBE</p>
              <h5 className="text-textColor">New Technology</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-full h-full flex flex-col  gap-y-3">
              <div className="rounded-md overflow-hidden">
                {" "}
                <Image
                  alt="shoes"
                  src="/sshoes.jpg"
                  width={1000}
                  height={800}
                  className="inline-block hover:scale-125 duration-1000 transition-transform"
                />
              </div>
              <p>VIMEO</p>
              <h5 className="text-textColor">firogo Magistic Ltd.</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-full h-full flex flex-col  gap-y-3">
              <div className="overflow-hidden rounded-md">
                <Image
                  alt="shuors"
                  src="/shouse.jpg"
                  className="hover:scale-125 transition-transform duration-1000 "
                  width={1000}
                  height={800}
                />
              </div>
              <p>SOUNDCLOUD</p>
              <h5 className="text-textColor">Creative Bulding</h5>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="w-full h-full flex flex-col gap-y-3">
              <div className="rounded-md overflow-hidden">
                {" "}
                <Image
                  alt="boat"
                  src="/ssboats.jpg"
                  className="hover:scale-125 transition-transform duration-1000"
                  width={900}
                  height={800}
                />
              </div>
              <p>MODALBOX</p>
              <h5 className="text-textColor">Beautiful Boat</h5>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex mt-4 justify-center">
        <Button text="View All Project" />
      </div>
    </div>
  );
}

export default RecentProjects;
