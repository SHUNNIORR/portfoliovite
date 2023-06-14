import React from "react";
import "./About.css";

export const About = ({ isScrolling }) => {
  return (
    <div className="container about-container">
      <div
        className={`about-descripcion ${
          isScrolling > 400 && isScrolling < 1000 ? "scrolling-about" : null
        }`}
      >
        <h3>Let me tell you something about me</h3>
        <p>
          Software developer with <strong>2+ years of experience</strong> in web
          development focused on frontend Frameworks, such as
          <strong> Angular and React.js</strong> . Manipulating state management
          libraries such as <strong>REDUX and ContextAPI</strong>, previous experience consuming
          <strong> REST</strong> services, Interceptors, design systems with<strong>CSS & SCSS</strong>  and with
          basic knowledge of Backend development with <strong>JAVA</strong> with <strong>SpringBoot</strong>,
          management of sql and non-sql Databases, design of <strong>REST</strong> services based
          on architecture clean. Managing standards and programming principles
          such as <strong>Clean Code, SOLID, KISS AND DRY.</strong>
        </p>
        <div className="about_downloadCv" >
            <a className={`about_downloadCv-button ${
          isScrolling > 400 && isScrolling < 1000 ? "scrolling-about" : null
        }`} href="https://drive.google.com/file/d/1eKr39lVco97Pe-Ii0yj9nMTSMNVDfDc3/view?usp=sharing" download rel="noopener noreferrer" target="_blank">
                Download Cv
            </a>
        </div>
      </div>
      <div className="about-img ">
        <img
          src="https://avatars.githubusercontent.com/u/54753972?v=4"
          className={`about-img-img img-fluid ${
            isScrolling > 400 && isScrolling < 1000 ? "scrolling-img" : null
          }`}
          style={{ borderRadius: "50%" }}
        ></img>
      </div>
    </div>
  );
};
export default About;
