"use client";
import React, { useState } from "react";
import Button from "./button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCalendarWeek,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

function MyBlogs() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredBlogIndex, setHoveredBlogIndex] = useState(null); // Store index of hovered blog

  // Blog data array
  const blogs = [
    {
      date: "April 12, 2023",
      title: "12 unique examples of portfolio websites",
      image: "/web12.jpg", // Replace with your image path
    },
    {
      date: "June 22, 2023",
      title: "How to boost your portfolio design",
      image: "/bostforfile.jpg", // Replace with another image path
    },
    {
      date: "September 5, 2023",
      title: "Top 10 web development trends",
      image: "/webtrends.jpg", // Replace with another image path
    },
    // Add more blogs as needed
  ];

  // Update cursor position
  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  // Show image when hovering over a specific blog
  const showImage = (index) => {
    setIsVisible(true);
    setHoveredBlogIndex(index); // Set the current blog being hovered
  };

  const hideImage = () => {
    setIsVisible(false);
    setHoveredBlogIndex(null); // Reset hovered blog
  };

  return (
    <div
      className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between mx-10 py-10 mb-10"
      id="blog"
    >
      <div className="flex flex-1 m-1 flex-col gap-y-10">
        <p>- BLOG</p>
        <h3 className="text-textColor">My blogs & news</h3>
        <Button text="Get in touch" />
      </div>
      <div className="flex flex-1 flex-col m-1 gap-y-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="flex items-center justify-between"
            onMouseOver={() => showImage(index)}
            onMouseOut={hideImage}
            onMouseMove={handleMouseMove}
            style={{ cursor: "pointer" }}
          >
            <div>
              <p>
                <FontAwesomeIcon icon={faCalendarWeek} /> {blog.date}
              </p>
              <h3 className="text-textColor font-semibold text-xl sm:text-2xl  md:text-3xl">
                {blog.title.split(" ").slice(0, 3).join(" ")} <br />
                {blog.title.split(" ").slice(3).join(" ")}
              </h3>
            </div>
            {isVisible && hoveredBlogIndex === index && (
              <Image
                alt="hover image"
                className="opacity-80"
                width={200}
                height={40}
                src={blog.image}
                style={{
                  position: "fixed",
                  left: position.x,
                  top: position.y,
                  transform: "translate(10%, 10%)",
                  pointerEvents: "none",
                }}
              />
            )}
            <div>
              <h5 className="text-textColor">
                Learn More <FontAwesomeIcon icon={faArrowRight} />
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyBlogs;
