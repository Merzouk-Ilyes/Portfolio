import React from "react";
import Navbar from "../components/navbar";
import Layout from "../components/layout";
import BgText from "../components/bgText";
import ProjectCard from "../components/projectCard"
function Projects() {
  return (
    <Layout>
      <div className="relative bg-white dark:bg-black ">
        <Navbar />
        <BgText text="Projects." />
        <h1 className=" mx-[5%]  md:mx-[10%] lg:mx-[20%]  text-[40px]  md:text-[50px] lg:text-[60px] text-black dark:text-white font-[700] ">
          Projects.
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-2 mt-9 mx-[5%]  md:mx-[10%] lg:mx-[20%]  ">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />



        </div>
      </div>
    </Layout>
  );
}

export default Projects;
