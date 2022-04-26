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
    <div  before="Hello, There." className="App h-[100vh]  after:content-[attr(before)] after:text-[200px] after:font-[900]  after:tracking-[-20px] after:text-gray-200 after:absolute after:bottom-0 after:left-0 after:z-0 after:opacity-40 relative bg-white dark:bg-black ">
      <Navbar />
      <h1
        className={`${glitch}  +  mt-9 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[40px]  md:text-[50px] lg:text-[60px]  dark:text-white`}
      >
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
        I&apos;m Merzouk Ilyes
        <span aria-hidden="true">I&apos;m Merzouk Ilyes</span>
      </h1>
      <p className="description dark:text-white leading-[35px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[15px] md:text-[17px] ">
        Full stack web developer, I like to craft solid and scalable products
        with great user experiences.
      </p>

      <p className="description dark:text-white leading-[35px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[15px] md:text-[17px]">
        Working on solutions that leverage best-practice technologies to deliver
        a top user experience is my pleasure. <br /> View my
        <span className="dark:text-white text-black"> Projects </span> , <span className="dark:text-white text-black"> Skills </span> ,{" "}
        <span className="dark:text-white text-black"> Contact Me </span>, or send me an email directly at
        <span className="dark:text-white text-black"> merzouk.ilyase@gmail.com. </span>
      </p>
      <Link href="/">
      <a
        
        className="description dark:text-white leading-[35px] mt-[50px] mx-[5%]  md:mx-[10%] lg:mx-[20%] flex items-center text-gray-600  text-[15px] md:text-[17px]"
      >
        See more about me <HiArrowNarrowRight className="ml-5 text-[20px]" />{" "}
      </a>
      </Link> 
      <div className="flex mt-8  dark:text-white text-[20px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
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
