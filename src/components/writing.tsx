import React from "react";
import { client, gql } from "../util";
import { socialMediaLink } from "@/app/contants";

async function Writing() {
  const {
    data: {
      publication: {
        posts: { edges },
      },
    },
  } = await client.query({
    query: gql`{
 publication(host: "${socialMediaLink.hashNodeHost}") {
  title
  posts(first:4){
    edges{
      node{
        title
        publishedAt
        subtitle
        readTimeInMinutes
        url
      }
    }
  }
 } 
}`,
  });
  const postList = edges.map(
    (edge: {
      node: {
        title: string;
        publishedAt: string;
        subtitle: string;
        readTimeInMinutes: number;
        url: string;
      };
    }) => edge.node,
  );
  return (
    <div>
      <div id={"writings"} className="writings-container ">
        <h2 className="writings-headline">Some of my writings</h2>

        <div className="writings-cards-container">
          {postList.map(
            (
              post: {
                title: string;
                publishedAt: string;
                subtitle: string;
                readTimeInMinutes: number;
                url: string;
              },
              index: number,
            ) => {
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
            },
          )}
        </div>
      </div>
    </div>
  );
}

export default Writing;
