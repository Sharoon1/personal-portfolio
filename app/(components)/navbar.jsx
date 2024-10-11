"use client";
import React from "react";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="md:hidden bg-white shadow fixed w-full z-10">
        <ul className="flex  justify-center my-2 space-x-1 sm:space-x-8">
          <li>
            {" "}
            <Link
              className="hover:text-borderC border-e-2 sm:border-none p-1 border-hoverColor text-allTextC hover:scale-110"
              href="/#frontpage-section"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-borderC hover:scale-110 border-e-2 sm:border-none p-1 border-hoverColor text-allTextC"
              href="/#about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-borderC hover:scale-110 border-e-2 sm:border-none border-hoverColor p-1 text-allTextC"
              href="/#services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-borderC hover:scale-110 border-e-2 border-hoverColor sm:border-none p-1 text-allTextC"
              href="/#port"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-borderC hover:scale-110 border-e-2 border-hoverColor sm:border-none p-1 text-allTextC"
              href="/#blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-borderC hover:scale-110 text-allTextC"
              href="/#contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
