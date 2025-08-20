import React from "react";
import Link from "next/link";
import { getAllPosts } from "@/app/actions";
import { socialMediaLink } from "@/app/contants";

async function Page() {
  const posts = (await getAllPosts()) as unknown as Array<{
    title: string;
    publishedAt: string;
    views: number;
    url: string;
  }>;
  
  return (
    <main className="min-h-screen  bg-white text-black p-5 md:p-20">
      <div className='max-w-3xl mx-auto'>


        <div className=" mx-auto ">
          <h1 className="mb-4 text-2xl font-semibold text-black">Blog</h1>
          <h2 className="mb-4 text-xl text-black leading-relaxed">
            Thoughts on development, technology, and problem-solving.
          </h2>
          
        </div>

        <div className="ml-8 mb-8 space-y-2">
          <p>Recent Posts</p>
          {posts.map((post) => (
            <li key={post.url} className="pb-5">
              <a
                href={post.url}
                rel="noopener noreferrer"
                target="_blank"
                className="text-blue-600 hover:text-blue-800 "
              >
                {post.title}
              </a>{" "}
              ({new Date(post.publishedAt).getFullYear()}) - {post.views} views
            </li>
          ))}
          
          {posts.length === 0 && (
            <li className="pb-5">
              No blog posts found. Check back later for new content!
            </li>
          )}
        </div>
        
        
        
        <div className="flex flex-wrap gap-6">
          <Link href="/" className="text-blue-600 hover:text-blue-800 ">
            Home
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

export default Page;
