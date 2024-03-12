import { client, gql } from "@/util";
import { socialMediaLink } from "@/app/contants";

const getPostsForResume = async () => {
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
  return edges.map(
    (edge: {
      node: {
        title: string;
        publishedAt: string;
        subtitle: string;
        readTimeInMinutes: number;
        url: string;
      };
    }) =>
      edge.node as {
        title: string;
        publishedAt: string;
        subtitle: string;
        readTimeInMinutes: number;
        url: string;
      }[],
  );
};

const getAllPosts = async () => {
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
  posts(first:20){
    edges{
      node{
        url
        slug
        title
        publishedAt
        views
      }
    }
  }
 } 
}`,
  });
  return edges.map(
    (edge: {
      node: {
        slug: string;
        title: string;
        publishedAt: string;
        views: number;
        url: string;
      };
    }) => edge.node,
  ) as {
    slug: string;
    title: string;
    publishedAt: string;
    views: number;
    url: string;
  }[];
};
export { getPostsForResume, getAllPosts };
