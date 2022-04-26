import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
function Socials() {
  return (
    <div className="flex mt-8 relative  z-10 dark:text-white text-[20px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
      <a href="https://www.facebook.com/ilyas.merzouk.90" target="_blank" rel="noopener noreferrer">  <FaFacebookF className="mr-7" /></a> 
      <a href="https://www.instagram.com/ilyes17_mk/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="mr-7" /> </a> 
      <a href="https://twitter.com/IlyesReda17" target="_blank" rel="noopener noreferrer"> <AiOutlineTwitter className="mr-7" /></a> 
      <a href="https://github.com/Merzouk-Ilyes" target="_blank" rel="noopener noreferrer">  <AiFillGithub className="mr-7" /></a> 
      <a href="https://www.linkedin.com/in/merzouk-ilyes-reda-5154a41b6/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin /> </a> 
      </div>
  )
}

export default Socials