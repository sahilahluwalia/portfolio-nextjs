"use client";

import React from "react";

import { GithubIcon, LinkIcon } from "@/icons";

const Projects = [
  {
    name: "",
    description: "",
    technologies: ["Zustand", "React", "TypeScript", "Framer Motion"],
    github: "",
    link: "",
  },
  {
    name: "",
    description: "",
    technologies: ["Firebase", "TypeScript", "React", "UI/UX"],
    github: "",
    link: "",
  },
  {
    name: "",
    description: "",
    technologies: ["Tailwind", "React", "Websocket", "TypeScript"],
    github: "",
    link: "",
  },
  {
    name: "",
    description: "",
    technologies: ["React", "TypeScript", "Rough.js"],
    github: "",
    link: "",
  },
];

function Project() {
  return (
    <div className="projects-container pt-5">
      <h2 className="projects-headline">Projects</h2>
      <div className="projects-wrapper">
        {Projects.map((project, index) => {
          return (
            <div className="projects-card cursor-pointer" key={index}>
              <div className="projects-card-gardient"></div>
              <div className="projects-card-links">
                <a href={project.github} target="_blank">
                  <GithubIcon />
                </a>
                <a href={project.link} target="_blank">
                  <LinkIcon />
                </a>
              </div>
              <h3 className="projects-card-name">{project.name}</h3>
              <p className="projects-card-description">{project.description}</p>
              <div className="projects-card-languages">
                {project.technologies.map((technology, index) => {
                  return <span key={index}>{technology}</span>;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Project;
