import React from "react";
import Image from "next/image";
import Link from "next/link";
function Header() {
  return (
    <div className="flex flex-col w-full  ">
      <div className="flex justify-center">
        <Image
          style={{ backgroundColor: "#c3bfc0" }}
          className="border-2 flex items-center   border-borderC rounded-full "
          src="/ho1.png"
          alt="cards"
          width="80"
          height="80"
        />
      </div>
      <div className=" relative w-full flex justify-center  ">
        <h3
          className="italic text-3xl opacity-10 font-extrabold  "
          style={{ fontFamily: "Kristi" }}
        >
          Sharoon Sarfraz
        </h3>
        <span
          className="absolute text-black font-bold  text-xl inset-y-0 mt-2 "
          style={{ fontFamily: "inter", color: "#231f55" }}
        >
          Sharoon Sarfraz
        </span>
      </div>
      {/* second section */}
      <div className="">
        <ul className="flex text-center gap-y-4 flex-col w-full justify-center my-14">
          <Link
            className="hover:text-borderC text-allTextC hover:scale-110"
            href="/#frontpage-section"
          >
            Home
          </Link>
          <Link
            className="hover:text-borderC hover:scale-110 text-allTextC"
            href="/#about"
          >
            About
          </Link>
          <Link
            className="hover:text-borderC hover:scale-110 text-allTextC"
            href="/#services"
          >
            Services
          </Link>
          <Link
            className="hover:text-borderC hover:scale-110 text-allTextC"
            href="/#port"
          >
            Portfolio
          </Link>
          <Link
            className="hover:text-borderC hover:scale-110 text-allTextC"
            href="/#blog"
          >
            Blog
          </Link>
          <Link
            className="hover:text-borderC hover:scale-110 text-allTextC"
            href="/#contact"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Header;
