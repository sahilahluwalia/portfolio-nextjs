import Link from "next/link";
import { socialMediaLink } from "@/app/contants";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-3 p-6 sm:p-20 bg-white text-black font-normal">
      <h1 className="text-black">sahilahluwalia.com</h1>
      <h2 className="text-black">
        Hi 👋 My name is Sahil Ahluwalia. I am a Software Developer. I mainly
        work in Next.js and Typescript.
      </h2>
      <p>A little bit about myself:</p>
      <div className="ml-10">
        <li>
          working on Short Video Creation platform to completely automate mass faceless video production end to end.{" "}
          <Link
              rel="noopener noreferrer"
              target="_blank"
              className="text-blue-600"
              href={"https://shortsgenie.ai/"}
          >
            {" "}
            ShortsGenie
          </Link>
          .
        </li>
        <li>
          was full stack contributor on Ed-tech platform for
          teachers to generate & mark student assessments using AI named{" "}
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
          was founding software engineer of HR platform to ease
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
        <li>studied Computer Science from 2018 to 2022.</li>
        <li>from Mumbai, India.</li>


      </div>
      <p>
        I am fortunate to have worked with some amazing people and get to learn
        from them.
      </p>
      <div className="flex gap-6 flex-wrap">
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
