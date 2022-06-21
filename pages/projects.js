import React from "react";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import BgText from "../components/bgText";
import ProjectCard from "../components/projectCard";
function Projects() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black  pb-10 ">
        <Navbar />
        <BgText text="Projects." />
        <h1 className=" mx-[5%] md:mx-[10%] lg:ml-[20%]   text-[40px]  md:text-[50px] lg:text-[60px] text-black dark:text-white font-[700] ">
          Projects.
        </h1>
        <div className="grid  lg:w-[850px]  grid-cols-1  gap-2  mt-9 mx-[5%] md:mx-[10%] lg:ml-[20%]    ">
          <ProjectCard
            title="ShopNow"
            description="An E-commerce website"
            techs={["React JS", "Firebase", "Sass", "Chakra UI"]}
            img="/projects/img1.png"
            githubUrl="https://github.com/Merzouk-Ilyes/Shopnow"
            demoUrl="https://shopnow-commerce.netlify.app"
            demoExist={true}
          />
          <ProjectCard
            title="Movie's Trending App"
            description="A real time app that shows the trending movies & series from different categories"
            techs={["Next JS", "Tailwindcss", "TMDB API"]}
            img="/projects/img4.png"
            githubUrl="https://github.com/Merzouk-Ilyes/hulu-clone"
            demoUrl="https://trending-movies-tmdb.vercel.app/"
            demoExist={true}
          />
          <ProjectCard
            title="Rented"
            description="A renting website with a  recommendations system to recommend posts to users  based on their preferences"
            techs={["React JS", "Node JS","Sass", "Chakra UI", "TailwindCss"]}
            img="/projects/img5.png"
            githubUrl="https://github.com/Merzouk-Ilyes/Projet-2CS-Front"
            demoUrl=""
            demoExist={false}
          />
          <ProjectCard
            title="Treva"
            description="A landing page for a job searching platform"
            techs={["React JS" , "Sass", "Framer motion"]}
            img="/projects/img2.png"
            githubUrl="https://github.com/Merzouk-Ilyes/treva"
            demoUrl="https://treva.netlify.app"
            demoExist={true}
          />
          <ProjectCard
            title="Rented Beta"
            description="A landing page for a locals renting platform"
            techs={["Html", "Css","JQuery"]}
            img="/projects/img3.png"
            githubUrl="https://github.com/Merzouk-Ilyes/Rented-landing-page"
            demoUrl="https://rented-landing-page.netlify.app"
            demoExist={true}
          />
          <ProjectCard
            title="Personal Portfolio"
            description=""
            techs={["Next JS", "Chakra UI", "TailwindCss"]}
            img="/projects/img0.png"
            githubUrl="https://github.com/Merzouk-Ilyes/Portfolio"
            demoUrl="https://portfolio-merzouk-ilyes.vercel.app/"
            demoExist={true}
          />
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
