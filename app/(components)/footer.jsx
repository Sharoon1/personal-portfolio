import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebookF,
  faLinkedinIn,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className="flex flex-col gap-y-5 align-bottom justify-end items-stretch">
      <div className="flex gap-x-2  justify-center">
        <a
          href="https://www.facebook.com/profile.php?id=61566587878723"
          target="_blank"
        >
          <FontAwesomeIcon
            className="w-8 px-3 shadow-small text-black py-2  bg-bgIcon  rounded-full"
            icon={faFacebookF}
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.pinterest.com/sharoonsarfraz001/" target="_blank">
          <FontAwesomeIcon
            className="w-9 shadow-small px-3 text-black py-2  bg-bgIcon  rounded-full"
            icon={faPinterestP}
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/sharoon-sarfraz" target="_blank">
          <FontAwesomeIcon
            className="w-9 shadow-small         
          px-3 text-black py-2  bg-bgIcon  rounded-full"
            icon={faLinkedinIn}
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="text-center">
        <p>Copyright &copy; 2024 Sharoon</p>
        <p>Sarfraz. All Rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
