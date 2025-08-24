const socialMediaLink = {
  github: "https://github.com/sahilahluwalia",
  linkedIn: "https://www.linkedin.com/in/iamsahilahluwalia/",
  twitter: "https://twitter.com/sahillovescode",
  instagram: "https://www.instagram.com/iamsahilahluwalia/",
  hashNode: "https://sahilahluwalia.hashnode.dev/",
  hashNodeHost: "sahilahluwalia.hashnode.dev",
  email: "contact@sahilahluwalia.com",
  sourceCode: "https://github.com/sahilahluwalia/portfolio-nextjs",
  emailMe: "mailto:contact@sahilahluwalia.com",
};

const SEO = {
  title: "Sahil Ahluwalia | Full Stack Developer",
  url: "https://sahilahluwalia.com",
  description:
    "Sahil Ahluwalia is a Full Stack Developer specializing in building scalable, optimized, and secure web applications.",
  openGraph: {
    type: "website",
    url: "https://sahilahluwalia.com",
    title: "Sahil Ahluwalia",
    description:
      "Sahil Ahluwalia is a Full Stack Developer specializing in building scalable, optimized, and secure web applications.",
    image: "https://sahilahluwalia.com/images/social-share.png",
  },
  twitter: {
    handle: "@sahillovescode",
    site: "@sahillovescode",
    cardType: "summary_large_image",
  },
};

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
    "Qstash",
    "Whisper",
    "Cloudfare",
];

const experienceArray = [
  {
    date: "March 2024 - Current ",
    company: "ShortsGenie",
    title: "Founder",
    type: null,
    link: "https://shortsgenie.ai/",
    description:
    "Decided to solve the problem of mass video production by creating platform that automates the entire process. Just select the type of video, platform will generate interactive video for you.",
    technologies: [
      "Next.js",
      "Postgres SQL",
      "TypeScript",
      "REST",
      "Framer-Motion",
      "AWS",
      "Supabase",
        "Whisper",
        "Cloudfare",
        "Qstash",
      "Prisma",
      "NextAuth.js",
    ],
  },
  {
    date: "April 2023 - Feb 2024",
    company: "MarkMyWords",
    title: "Fullstack Developer",
    type: "contract",
    link: "https://markmywords.au/",
    description:
        "I am working on a team of 3 to develop an ed-tech platform that helps Teachers to give explicit feedback and track student's progress. We leveraged OpenAI to use AI to grade student's assignments and provide feedback.",
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
    title: "Frontend Developer",
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
      "Mongoose",
      "JWT",
    ],
  },
];

export { socialMediaLink, SEO,skillSetArray, experienceArray, };
