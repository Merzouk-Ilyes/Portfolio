import React from "react";
import { MdEmail } from "react-icons/md";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import {FaFacebookF} from "react-icons/fa"
function Socials() {
  return (
    <div className="grid grid-cols-6 gap-2 w-[370px]  relative  z-10 dark:text-white text-[27px] text-gray-600 my-8  mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
      <a
        href="mailto:merzouk.ilyase@gmail.com"  
        className=" w-fit"
      >
        {" "}
        <MdEmail />
      </a>
      <a
        href="https://www.instagram.com/ilyes17_mk/"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        <AiFillInstagram />{" "}
      </a>
      <a
        href="https://www.facebook.com/ilyas.merzouk.90"
        target="_blank"
        rel="noopener noreferrer"
        className=" w-fit"
      >
        <FaFacebookF />{" "}
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
