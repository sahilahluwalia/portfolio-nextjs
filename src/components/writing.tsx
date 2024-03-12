import React from "react";
import { getPostsForResume } from "@/app/actions";

async function Writing() {
  const posts = (await getPostsForResume()) as unknown as Array<{
    title: string;
    publishedAt: string;
    subtitle: string;
    readTimeInMinutes: number;
    url: string;
  }>;
  return (
    <div>
      <div id={"writings"} className="writings-container ">
        <h2 className="writings-headline">Some of my writings</h2>
        <div className="writings-cards-container">
          {posts.map((post, index: number) => {
            return (
              <a
                className="writings-card"
                href={post.url}
                target="_blank"
                key={index}
              >
                <div className="writings-card-gardient"></div>
                <h3 className="writings-card-title">{post.title}</h3>
                <div className="writings-card-wrapper">
                  <span>
                    {new Date(post.publishedAt).toLocaleString("default", {
                      month: "short",
                    }) +
                      " " +
                      new Date(post.publishedAt).getDate() +
                      ", " +
                      new Date(post.publishedAt).getFullYear()}
                  </span>{" "}
                  <span>•</span>
                  <div className="writings-card-wrapper-minutes">
                    <div>☕️</div>
                    <div>{post.readTimeInMinutes} min read</div>
                  </div>
                </div>
                <p className="writings-card-subtitle">{post.subtitle}</p>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Writing;
