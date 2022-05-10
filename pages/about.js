import Navbar from "../components/navbar";
import BgText from "../components/bgText";
import Layout from "../components/layout";
import Image from "next/image";
import { border, card, card0,social_icons } from "../public/sass/card.module.sass";
import { MdAlternateEmail } from "react-icons/md";
import {
  AiOutlineInstagram,
} from "react-icons/ai";
import {FiTwitter,FiGithub,FiLinkedin} from "react-icons/fi"
function About() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black ">
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
              Hello! My name is Merzouk Ilyes, My interest in web development
              started back in 2018 when i created my first travel agency landing
              page and since then i kept exploring the vast world of web
              development from Front-end to Back-end and ultimately DevOps.
              <br />
              <br />I worked on various full stack project with some of the
              popular stacks available right now such as the <span>
                {" "}
                MERN{" "}
              </span>{" "}
              & <span> MEAN </span> stacks. but i also had the opportunity to
              explore other technologies such as Php/Laravel & Java/SpringBoot .
              <br />
              <span>
                {" "}
                Here are the technologies that i&apos;m most proficient at :
                <br />
                <br />
                Front-End : Html5, Css/Scss/Sass, Javascript ES6+, Typescript,
                React js/Redux, Next Js, Angular, Jquery.
                <br />
                <br />
                Back-End : Node Js/Express Js, Laravel, SpringBoot, Firebase.
                <br />
                <br />
                DevOps & Version Control : Git, Docker, Google cloud platform,
                Heroku.
              </span>
            </p>
            <div className="grid   grid-cols-5 md:grid-cols-10  gap-4 my-8 ">
              <Image
                src="/../public/images/logos/react.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/node.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/ng.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/js.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/ts.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/html.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/sass.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/fire.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/lara.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
              <Image
                src="/../public/images/logos/docker.png"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
          {/* <div className="relative   ">
            <Image
              src="/../public/images/pic1.jpg"
              alt="Picture of the author"
              height="450px"
              width="300px"
              className="rounded-xl   drop-shadow-2xl z-20  grayscale hover:grayscale-0 transition  delay-150 "
            />
            <div
              className="absolute h-[450px] w-[300px]
              top-5
              rounded-xl  z-10
              left-7
              border-dashed	
              border-slate-500	
              border-2
              hover:top-0
              hover:left-0
                    
          "
            ></div>
          </div> */}
          <div className={`${card} + ${card0}`}>
            <div className={border}>
              <div className={social_icons}>
                <a href="mailto:merzouk.ilyase@gmail.com" className=" w-fit">
                  {" "}
                  <MdAlternateEmail />
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
                  <FiLinkedin />{" "}
                </a>
                <a
                  href="https://twitter.com/IlyesReda17"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" w-fit"
                >
                  {" "}
                  <FiTwitter />
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
