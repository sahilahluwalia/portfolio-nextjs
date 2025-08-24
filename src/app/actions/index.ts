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
    }) => edge.node,
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
        url: string;
        title: string;
        publishedAt: string;
        views: number;
      };
    }) => edge.node,
  );
};
export { getPostsForResume, getAllPosts };
