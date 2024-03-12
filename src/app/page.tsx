import Link from "next/link";
import { socialMediaLink } from "@/app/contants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 p-24 bg-white text-black font-normal">
      <h1 className="text-black">sahilahluwalia.com</h1>
      <h2 className="text-black">
        Hi 👋 My name is Sahil Ahluwalia. I am a Software Developer. I mainly
        work in React and Typescript.
      </h2>
      <p>A little bit about myself:</p>
      <div className="ml-10">
        <li>wrote first code in 2016</li>

        <li>i am from Mumbai, India.</li>
        <li>studied Computer Science from 2018 to 2022.</li>
        <li>
          i am obsessed about solving problems through code, and trying my best
          every day.
        </li>
        <li>
          was full stack developer on AI based Ed-tech platform for australian
          teachers to generate & mark student assessments named{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600"
            href={"https://markmywords.au/"}
          >
            {" "}
            MarkMyWords
          </Link>
          .
        </li>

        <li>
          was founder software engineer on AI based indian HR platform to ease
          the hiring progress named{" "}
          <Link
            rel="noopener noreferrer"
            target="_blank"
            className="text-blue-600"
            href={"https://www.workcrew.ai/"}
          >
            WorkCrew
          </Link>
          .
        </li>
      </div>
      <p>
        I am fortunate to have worked with some amazing people and get to learn
        from them.
      </p>
      <div className="flex gap-6">
        <Link className="text-blue-600" href={"/blog"}>
          Blog
        </Link>

        <Link
          className="text-blue-600"
          target="_blank"
          href={socialMediaLink.linkedIn}
        >
          Linkedin
        </Link>

        <Link
          className="text-blue-600"
          target="_blank"
          href={socialMediaLink.github}
        >
          Github
        </Link>

        <Link className="text-blue-600" href={"/fancy-resume"}>
          Fancy Resume
        </Link>
      </div>
    </main>
  );
}
