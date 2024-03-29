import React from "react";
import { getAllPosts } from "@/app/actions";
async function Page() {
  const posts = (await getAllPosts()) as unknown as Array<{
    title: string;
    publishedAt: string;
    views: number;
    url: string;
  }>;
  return (
    <>
      <main className="max-w-2xl font-mono m-auto mb-10 text-sm mt-5 text-black bg-white">
        <header className="text-gray-500  flex items-center text-xs mx-5">
          <span className="w-12 text-left ">date</span>
          <span className="grow pl-2">title</span>
          <span className=" pl-4 text-gray-700 ">views</span>
        </header>
        <ul>
          <li>
            {posts.map((post) => {
              return (
                <a key={post.url} href={post.url}>
                  {/*<a href={`/blog/${post.slug}`}>*/}
                  <span
                    className="px-5 flex transition-[background-color] hover:bg-gray-100 group dark:hover:bg-[#242424] active:bg-gray-200 dark:active:bg-[#222] border-y border-gray-200 dark:border-[#313131]
    border-b-0
"
                  >
                    <span className="py-3 flex grow items-center ">
                      <span className="w-14 inline-block self-start shrink-0 text-gray-700 group-hover:text-white">
                        {new Date(post.publishedAt).getFullYear()}
                      </span>
                      <span className="grow text-gray-700 group-hover:text-white">
                        {post.title}
                      </span>
                      <span className="text-gray-700 group-hover:text-white text-xs">
                        {post.views}
                      </span>
                    </span>
                  </span>
                </a>
              );
            })}
          </li>
        </ul>
      </main>
    </>
  );
}

export default Page;
