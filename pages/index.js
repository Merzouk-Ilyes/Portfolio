import Navbar from "../components/navbar";
import Layout from "../components/layout";
import { glitch } from "../public/sass/glitch.module.sass";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Socials from "../components/socials";
import BgText from "../components/bgText";
import { motion } from "framer-motion";
import {LightMode} from "@chakra-ui/react"
import Head from "next/head";

export default function Home() {
  return (
    // <LightMode>
    
    <Layout>
      <Head>
        <title>MERZOUK ILYES &copy; </title>
      </Head>
      <div className="h-[100vh]  relative bg-white dark:bg-black ">
        <Navbar />
        <BgText text="Hello, There." />
     <LightMode>

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
          Working on solutions that leverage best-practice technologies to
          deliver a top user experience is my pleasure. <br /> View my
          <Link href="/projects">
            <span className="dark:text-white text-black"> Projects </span>
          </Link>
          ,{" "}
          <Link href="/about">
            <span className="dark:text-white text-black"> Skills </span>
          </Link>{" "}
          ,{" "}
          <Link href="/about">
            <span className="dark:text-white text-black"> About Me </span>
          </Link>
          , or send me an email directly at
          <Link href="mailto:merzouk.ilyase@gmail.com">
            <span className="dark:text-white text-black">
              {" "}
              merzouk.ilyase@gmail.com.{" "}
            </span>
          </Link>
        </p>
     </LightMode>


        <Link href="/about">
          <a className="description  w-fit relative z-40   dark:text-white leading-[35px] mt-[50px] mx-[5%]  md:mx-[10%] lg:mx-[20%] flex items-center text-gray-600  text-[15px] md:text-[17px]">
            See more about me{" "}
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: 20 }}
              transition={{ duration: 0.5, yoyo: Infinity }}
            >
              {" "}
              <BsArrowRight className="ml-5 text-[20px]" />
            </motion.div>
          </a>
        </Link>
        <Socials />
      </div>
    </Layout>
    // </LightMode>
  );
}
