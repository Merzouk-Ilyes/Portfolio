import Navbar from "../components/navbar";
import Cursor from "../components/cursor";
import { glitch } from "../public/sass/glitch.module.sass";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";
export default function Home() {
  return (
    <div className="App h-[100vh] relative bg-white">
      <Navbar />
      <h1
        className={`${glitch}  + mt-9 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[40px]  md:text-[50px] lg:text-[60px] `}
      >
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
        I&apos;m Merzouk Ilyes
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
      </h1>
      <p className="description leading-[35px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[15px] md:text-[17px] ">
        Full stack web developer, I like to craft solid and scalable products
        with great user experiences.
      </p>

      <p className="description leading-[35px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[15px] md:text-[17px]">
        Working on solutions that leverage best-practice technologies to deliver
        a top user experience is my pleasure. <br /> View my
        <span> Projects </span> , <span> Skills </span> ,{" "}
        <span> Contact Me </span>, or send me an email directly at
        <span> merzouk.ilyase@gmail.com. </span>
      </p>
      <Link href="/">
      <a
        href=""
        className="description leading-[35px] mt-[50px] mx-[5%]  md:mx-[10%] lg:mx-[20%] flex items-center text-gray-600  text-[15px] md:text-[17px]"
      >
        See more about me <HiArrowNarrowRight className="ml-5 text-[20px]" />{" "}
      </a>
      </Link> 
      <div className="flex mt-8  text-[20px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
        <FaFacebookF className="mr-7" />
        <AiOutlineInstagram className="mr-7" />
        <AiOutlineTwitter className="mr-7" />
        <AiFillGithub className="mr-7" />
        <AiFillLinkedin />
      </div>
      <Cursor />
    </div>
  );
}
