import Navbar from "../components/navbar";
import BgText from "../components/bgText";
import Layout from "../components/layout";
import Image from "next/image";
import {
  border,
  card,
  card0,
  social_icons,
} from "../public/sass/card.module.sass";
import { MdAlternateEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { FiTwitter, FiGithub, FiLinkedin,FiFacebook } from "react-icons/fi";
function About() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black pb-20 ">
        <Navbar />
        <BgText text="About." />
        <h1 className=" mx-[5%] md:mx-[10%]  lg:ml-[20%] text-[40px]  md:text-[50px] lg:text-[60px] text-black dark:text-white font-[700] ">
          About Me.
        </h1>
        <div className="flex flex-wrap justify-between  mx-[5%] md:mx-[10%] lg:ml-[20%]  lg:mr-[15%]  ">
          <div>
            <p
              className="text-black dark:text-white
           leading-[25px] tracking-wide	
           text-[15px] md:text-[17px]  w-[380px]  relative z-40  md:w-[550px]  "
            >
              Hello! My name is Merzouk Ilyes Reda i&apos;m a software engineer from Algeria, My interest in web development
              started back in 2018 when i created my first  website and since then i kept exploring the vast world of web
              development and specifically the  software development lifecycle including analysis, development, testing and deployment.
              currently I&apos;m interested in DevOps, testing & AI.
              
              <br />
           
              <br />
              <span>
                {" "}
                Here are some of  the technologies that i&apos;m proficient at :
                <br />
                <br />
                <div className="grid grid-cols-2">
                <ul>
                  <li>	&#916; Javascript ES6+ </li>
                  <li>	&#916; React Js - Redux</li>
                  <li>	&#916; Next Js</li>
                  <li>	&#916; Node Js</li>
                  <li>	&#916; Typescript </li>
                  <li>	&#916; Angular 13+ </li>
                 
                </ul>
                <ul>
                  <li>	&#916; PostgreSql </li>
                  <li>	&#916; MongoDB </li>
                  <li>	&#916; Spring Boot </li>
                  <li>	&#916; Docker </li>
                  <li>	&#916; Git </li>
                </ul>
              
                </div>
              </span>
            </p>
            <div className="grid   grid-cols-5 md:grid-cols-10  gap-4 my-8 ">
              <Image
                src="/images/logos/react.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/node.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/ng.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/js.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/ts.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
                {/* <Image
                  src="/images/logos/fire.png"
                  width="100%"
                  height="100%"
                  layout="responsive"
                  objectFit="contain"
                  alt="image"
                /> */}
              <Image
                src="/images/logos/boot.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/sass.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
              src="/images/logos/PG.png"
              width="100%"
              height="100%"
              layout="responsive"
              objectFit="contain"
              alt="image"
            />
              <Image
                src="/images/logos/db.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
              <Image
                src="/images/logos/docker.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
                alt="image"
              />
            </div>
          </div>
          <div className={`${card} + ${card0}`}>
            <div className={border}>
              <div className={social_icons}>
                <a href="mailto:merzouk.ilyase@gmail.com" className=" w-fit">
                  {" "}
                  <MdAlternateEmail />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/merzouk-ilyes-reda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-fit"
                >
                  {" "}
                  <FiLinkedin />{" "}
                </a>
               
                <a
                  href="https://github.com/Merzouk-Ilyes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-fit"
                >
                  {" "}
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
