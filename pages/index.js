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
import Layout from "../components/layout"
export default function Home() {
  return (
    <Layout >
    <div
     
      className="App h-[100vh]  relative bg-white dark:bg-black "
    >
      <Navbar />
      <p className="  text-[100px] md:text-[150px] lg:text-[180px]
        font-[900] tracking-[-20px] dark:text-gray-700 text-gray-200
         absolute bottom-0 left-0 opacity-40 z-0 " >Hello, There.</p>
      
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
        <span className="dark:text-white text-black"> Projects </span> ,{" "}
        <span className="dark:text-white text-black"> Skills </span> ,{" "}
        <span className="dark:text-white text-black"> Contact Me </span>, or
        send me an email directly at
        <span className="dark:text-white text-black">
          {" "}
          merzouk.ilyase@gmail.com.{" "}
        </span>
      </p>
      
      <Link href="/about"  >
        <a className="description  w-fit relative z-40   dark:text-white leading-[35px] mt-[50px] mx-[5%]  md:mx-[10%] lg:mx-[20%] flex items-center text-gray-600  text-[15px] md:text-[17px]">
          See more about me <HiArrowNarrowRight className="ml-5 text-[20px]" />{" "}
        </a>
      </Link>
      <div className="flex mt-8 relative  z-10 dark:text-white text-[20px] text-gray-600 mx-[5%]  md:mx-[10%] lg:mx-[20%] ">
      <a href="https://www.facebook.com/ilyas.merzouk.90" target="_blank" rel="noopener noreferrer">  <FaFacebookF className="mr-7" /></a> 
      <a href="https://www.instagram.com/ilyes17_mk/" target="_blank" rel="noopener noreferrer"><AiOutlineInstagram className="mr-7" /> </a> 
      <a href="https://twitter.com/IlyesReda17" target="_blank" rel="noopener noreferrer"> <AiOutlineTwitter className="mr-7" /></a> 
      <a href="https://github.com/Merzouk-Ilyes" target="_blank" rel="noopener noreferrer">  <AiFillGithub className="mr-7" /></a> 
      <a href="https://www.linkedin.com/in/merzouk-ilyes-reda-5154a41b6/" target="_blank" rel="noopener noreferrer"> <AiFillLinkedin /> </a> 
      </div>
      <Cursor />
    </div>
    </Layout>
  );
}
