import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import {
  LinkedinIcon,
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  HashnodeIcon,
  LinkIcon,
} from "@/icons";
import Link from "next/link";
import React from "react";
import Writing from "@/components/writing";
import { socialMediaLink } from "@/app/contants";
const skillSetArray = [
  "React.js",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Material-UI",
  "Git",
  "MongoDB",
  "Postgres SQL",
  "Express.js",
  "Node.js",
  "Framer-Motion",
  "Zustand",
  "Python",
  "OpenAI",
  "REST",
  "Postman",
  "Scrum",
  "DrizzleORM",
  "NextAuth.js",
  "AWS",
  "Prisma",
];

const experienceArray = [
  {
    date: "April 2023 - Feb 2024",
    company: "MarkMyWords",
    title: "Fullstack Developer",
    type: "contract",
    link: "https://markmywords.au/",
    description:
      "I am working on a team of 3 to develop an AI-based ed-tech platform that helps Teachers to give explicit feedback and track student's progress. We leveraged OpenAI to use AI to grade student's assignments and provide feedback.",
    technologies: [
      "Next.js",
      "Postgres SQL",
      "TypeScript",
      "REST",
      "Framer-Motion",
      "Zustand",
      "AWS",
      "DrizzleORM",
      "NextAuth.js",
    ],
  },
  {
    date: "Nov 2022 - May 2023",
    company: "Workcrew",
    title: "Software Developer",
    type: "full-time",
    link: "https://www.workcrew.ai/",
    description:
      "I worked on a team of 3 to develop a human resources platform that leverages AI to streamline the hiring process. I was responsible for developing the front-end and back-end of the platform, which included creating a user-friendly interface and integrating with the backend API.",
    technologies: [
      "React.js",
      "Javascript",
      "Material UI",
      "Tailwind",
      "Express.js",
      "MongoDB",
      "Moongoose",
      "JWT",
    ],
  },
];

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
              I'm a 24 year old developer living in India. I discovered my
              passion for computer after playing mods in Counter Strike 1.6. I
              fell in love with using my creativity to build things for the web.
              I decided to study Computer Science and then pursue a coding
              career, facing challenges along the way. Through persistence,
              self-discipline, and commitment, I achieved my goal of becoming a
              fullstack developer. What kept me on this journey is that I always
              find learning new things exciting and facing unfamiliar
              challenges. In addition to coding, I enjoy building side projects
              because it allows me to explore my creativity and accomplish
              exciting things.
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
                          ({experience.type})
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
          <span>© 2023 Sahil Ahluwalia</span>
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
