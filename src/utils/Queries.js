import { GraphQLClient, gql } from "graphql-request";

export const grahcms = new GraphQLClient(
  "https://api-ap-south-1.hygraph.com/v2/clx98k37t07hx07t8fwkiwot3/master"
);

const category = `
  id
  name
  slug
`;

const post = `
  id
  title
  slug
  bannerImage { 
    url 
  }
  content { 
    html 
  }
  description,
  createdAt,
`;

export const QUERY_SLUG_CATEGORIES = gql`
  {
    categories {
      ${category}
    }
  }
`;

export const QUERY_SLUG_POSTS = (postsPerPage, currentPage) => gql`
  {
    posts(first: ${postsPerPage}, skip: ${
  currentPage * postsPerPage - postsPerPage
}, orderBy: createdAt_DESC) {
      ${post}
      categories {
        ${category}
      }
    }
  }
`;

export const QUERY_INDIVIDUAL_POST = gql`
  query GetPostBySlug($slug: String!) {
    posts(where: { slug: $slug }) {
      ${post}
      categories {
      posts {
        slug
        title
        id
        bannerImage {
          url
        }
      }
    }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  {
    productCards {
      title
      productImage {
        url
      }
      productUrl
      id
    }
  }
`;
