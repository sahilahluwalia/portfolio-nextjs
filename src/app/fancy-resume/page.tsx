import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import {
  LinkedinIcon,
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  HashnodeIcon,
} from "@/icons";
import Link from "next/link";
import React from "react";
import Writing from "@/components/writing";
import {experienceArray, skillSetArray, socialMediaLink} from "@/app/contants";

const socialMediaArray = [
  {
    name: "LinkedIn",
    link: socialMediaLink.linkedIn,
    icon: <LinkedinIcon />,
  },
  {
    name: "Email",
    link: `mailto:${socialMediaLink.email}`,
    icon: <EmailIcon />,
  },
  {
    name: "GitHub",
    link: socialMediaLink.github,
    icon: <GithubIcon />,
  },
  {
    name: "Instagram",
    link: socialMediaLink.instagram,
    icon: <InstagramIcon />,
  },
  {
    name: "Hashnode",
    link: socialMediaLink.hashNode,
    icon: <HashnodeIcon />,
  },
];

export default function Home() {
  return (
    <div className="master">
      <Navbar />
      <Hero />
      <main id="main" className="main">
        <div>
          <div id={"about"} className="about-container">
            <h1 className="about-title">About</h1>
            <p className="about-description">
              I'm a {new Date().getFullYear()%100} year old developer living in India. This early experience sparked my curiosity and led me to pursue
              Computer Science in college.
              After graduating, I dove headfirst into a coding career, quickly
              evolved into a fullstack developer. Over the years, I've sharpened my
              skills in both frontend and backend technologies, allowing me to
              craft complete web solutions from the ground up. I fell in love with using my creativity to build things for the web.
              When I'm not coding, I mentor aspiring developers and explore ever-evolving nature of technology.
            </p>
            <div className="skills-container">
              <h2 className="skills-heading">Skillset</h2>
              <div className="skills-wrapper">
                {skillSetArray.map((skill, index) => {
                  return (
                    <span className="skills-item" key={index}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
            <div id={"work"} className="about-experience-section">
              <h2 className="about-experience-heading">I contributed on</h2>
              {experienceArray.map((experience, index) => {
                return (
                  <div className="about-experience-item" key={index}>
                    <div className="about-experience-date">
                      {experience.date}
                    </div>
                    <div>
                      <div className="flex gap-1">
                        <h2 className="about-experience-title underline underline-offset-4">
                          <Link href={experience.link} target="_blank">
                            {experience.company}
                          </Link>
                        </h2>
                        -<h2>{experience.title}</h2>
                        <span className="text-xs mt-1">
                          {experience?.type !== null && <>({experience.type})</>}
                        </span>
                      </div>

                      <p className="about-experience-description">
                        {experience.description}
                      </p>
                      <div className="about-experience-technologies">
                        {experience.technologies.map((technology, index) => {
                          return (
                            <span
                              className="about-experience-technology"
                              key={index}
                            >
                              {technology}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/*<Project/>*/}
        <Writing />
        <footer className="footer">
          <span>© {new Date().getFullYear()} Sahil Ahluwalia</span>
          <div className="footer-social">
            {socialMediaArray.map((socialMedia, index) => {
              return (
                <a href={socialMedia.link} target="_blank" key={index}>
                  {socialMedia.icon}
                </a>
              );
            })}
          </div>
        </footer>
      </main>
    </div>
  );
}
