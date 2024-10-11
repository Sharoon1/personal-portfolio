import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex flex-col gap-y-5 align-bottom justify-end items-stretch">
      <div className="flex gap-x-2  justify-center">
        <FontAwesomeIcon
          className="w-8 px-3 shadow-small text-black py-2  bg-bgIcon  rounded-full"
          icon={faFacebookF}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="w-9 shadow-small px-3 text-black py-2  bg-bgIcon  rounded-full"
          icon={faTwitter}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          className="w-9 shadow-small         
           px-3 text-black py-2  bg-bgIcon  rounded-full"
          icon={faLinkedinIn}
        ></FontAwesomeIcon>
      </div>
      <div className="text-center">
        <p>Copyright &copy; 2024 Sharoon</p>
        <p>Sarfraz. All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
