import React from "react";
import {container,card,pic,social } from '../public/sass/projectCard.module.sass'
function ProjectCard() {
  return (
    <>
      <div className={container}>
        <div className={card}>
          <h2>E-Commerce</h2>
          {/* <i className="fas fa-arrow-right"></i> */}
          <p>a lonely trip.</p>
          <div className={pic}></div>

          <div className={social}>
            {/* <i className="fab fa-facebook-f"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-github"></i> */}
          </div>
          <button></button>
        </div>
       
      </div>
    </>
  );
}

export default ProjectCard;
