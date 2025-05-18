import Link from "next/link";
import { socialMediaLink } from "@/app/contants";


export default function Home() {
  return (
    <main className="min-h-screen  bg-white text-black p-5 md:p-20">
      <div className='max-w-3xl mx-auto'>


        <div className=" mx-auto ">
          <h1 className="mb-4 text-2xl font-semibold text-black">Sahil Ahluwalia</h1>
          <h2 className="mb-4 text-xl text-black leading-relaxed">
            Generalist Developer specializing in building scalable, optimized, and secure applications. I enjoy reverse engineering and solving niche problems.
          </h2>
          <h3 className="mb-8 text-lg text-black leading-relaxed">
            I primarily work with TypeScript and occasionally Python. However, I'm comfortable using other languages when solving specific problems or working within constraints.
          </h3>
        </div>

        <div className="ml-8 mb-8 space-y-2">
          <p >Currently</p>
          <li className="pb-5">
            shipping end to end IIoT solutions for manufacturing plants
          </li>
          <p>Previously</p>
          <li>
            shipped Short Video Creation platform that completely automate mass faceless video creation end to end.{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://shortsgenie.ai/"}
              className="text-blue-600 hover:text-blue-800 "
            >
              {" "}
              ShortsGenie
            </Link>

          </li>
          <li>
            shipped Ed-tech platform for teachers to generate & mark student assessments using LLMs. {" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://markmywords.au/"}
              className="text-blue-600 hover:text-blue-800 "
            >
              {" "}
              MarkMyWords
            </Link>

          </li>
          <li className="pb-5">
            shipped HR platform to ease the hiring progress. {" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://workcrew.ai/"}
              className="text-blue-600 hover:text-blue-800 "
            >
              WorkCrew
            </Link>

          </li>
          <p className="mb-4">Miscellaneous:</p>
          <li>Studied Computer Science (2018-2022).</li>
          <li>Likes to play 1.6, GO and marvel rivals</li>
          <li>Based in Mumbai & Rajkot, India.</li>
        </div>
        <p className="mb-8">
          I am fortunate to have worked with some amazing people and get to learn
          from them.
        </p>
        <div className="flex flex-wrap gap-6">
          <Link href={"/blog"} className="text-blue-600 hover:text-blue-800 ">
            Blog
          </Link>

          <Link
            target="_blank"
            href={socialMediaLink.linkedIn}
            className="text-blue-600 hover:text-blue-800 "
          >
            Linkedin
          </Link>

          <Link
            target="_blank"
            href={socialMediaLink.github}
            className="text-blue-600 hover:text-blue-800 "
          >
            Github
          </Link>

          <Link
            target="_blank"
            href={socialMediaLink.emailMe}
            className="text-blue-600 hover:text-blue-800 "
          >
            Email me
          </Link>
        </div>
      </div>
    </main>
  );
}
