import React from "react";
import "./recent.css";
import { EXPERIENCES } from "./experiences";

const RecentWork = () => {
  return (
    <div className="recent-container">
      <h2>Experiences.</h2>
      {EXPERIENCES.map((experience,index)=>(
        <div className="experience-card">
        <div className="experience-card-header">
          <h4 className="experience-card-title">
            {experience.projectName}
          </h4>
          <strong>{experience.role}</strong>
        </div>
        <p className="experience-card-description">
          {experience.description}
        </p>
        <div className="experience-card-tasks">
          <strong>Skills</strong>
          <div className="experience-card-tasks-skillContainer">
            {experience.skills.map((skill)=>(
              <div className="experience-card-tasks-skill"><p>{skill.name}</p> <img className="experience-card-tasks-img" src={skill.urlImg}/></div>
            ))}
          </div>
        </div>
        <div className="experience-card-image-container">
          <img
            className="experience-card-image"
            src={experience.projectImg}
            alt="Project Screenshot"
          />
          <a
            className="experience-card-link"
            href="https://www.capsulasexpressnutresa.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
        </div>
      </div>
      ))}
    </div>
  );
};

export default RecentWork;
