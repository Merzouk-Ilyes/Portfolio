import Navbar from "../components/navbar";
import BgText from "../components/bgText";
import Layout from "../components/layout";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Socials from "../components/socials";
import {motion} from "framer-motion"
function Contact() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black pb-5 ">
        <Navbar />
        <BgText text="Contact." />
        <h1 className=" mx-[5%] md:mx-[10%]  lg:ml-[20%] text-[40px]  md:text-[50px] lg:text-[60px] text-black dark:text-white font-[700] ">
          Contact.
        </h1>
        <p className=" font-[200]  mx-[5%] md:mx-[10%]  lg:ml-[20%]  text-[12px] md:text-[15px]">
          Get in touch or shoot me an email directly on{" "}
          <Link href="mailto:merzouk.ilyase@gmail.com">
            <span
              className="dark:text-white
             text-black
              font-[600] 
              duration-500
              rounded-md
              hover:underline underline-offset-1 
              "
            >
              {" "}
              merzouk.ilyase@gmail.com.{" "}
            </span>
          </Link>
        </p>
        <form className=" mx-[5%] md:mx-[10%]  lg:ml-[20%] my-9 ">
          <input
            placeholder="Name"
            type="text"
            className="border rounded	 w-[400px] md:w-[550px]
        focus:outline-none
        py-3 px-7 my-3"
            required
          />
          <input
            placeholder="Email"
            type="email"
            className="border rounded	 w-[400px] md:w-[550px]
        focus:outline-none
        py-3 px-7 my-3"
            required
          />
          <input
            placeholder="Message"
            type="text"
            className="border rounded	 w-[400px] md:w-[550px]
        focus:outline-none relative z-20
        pt-3 pb-[100px] px-7 my-3"
            required
          />

          <button
            type="submit"
            className="block relative z-20 py-4
             px-9 mt-5 bg-black text-white
             rounded
             
             "
          >
            Send message
          </button>
        </form>
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
  );
}

export default Contact;
