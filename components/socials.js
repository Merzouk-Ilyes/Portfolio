import React from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
function Socials() {
  return (
    <div className="grid grid-cols-5 gap-4 w-[400px]  relative  z-10 dark:text-white text-[27px] text-gray-600 mt-8  mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
      <a
        href="https://www.facebook.com/ilyas.merzouk.90"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/ilyes17_mk/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        <AiOutlineInstagram />{" "}
      </a>
      <a
        href="https://www.linkedin.com/in/merzouk-ilyes-reda-5154a41b6/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiFillLinkedin />{" "}
      </a>
      <a
        href="https://twitter.com/IlyesReda17"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiOutlineTwitter />
      </a>
      <a
        href="https://github.com/Merzouk-Ilyes"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        {" "}
        <AiFillGithub />
      </a>
    </div>
  );
}

export default Socials;
