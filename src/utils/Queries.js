import { GraphQLClient, gql } from "graphql-request";

export const grahcms = new GraphQLClient('https://api-ap-south-1.hygraph.com/v2/clx98k37t07hx07t8fwkiwot3/master')

const category = `
  id
  name
`;

const post = `
  id
  title
  bannerImage { 
    url 
  }
  content { 
    html 
  }
  description
`;

export const QUERY_SLUG_CATEGORIES = gql`
  {
    categories {
      ${category}
    }
  }
`;

export const QUERY_SLUG_POSTS = gql`
  {
    posts(first: 100) {
      ${post}
      categories {
        ${category}
      }
    }
  }
`;
