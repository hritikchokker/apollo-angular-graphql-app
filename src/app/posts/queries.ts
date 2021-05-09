import { gql } from '@apollo/client/core';

export const GET_POST = gql`
  query GetPosts {
    posts {
      id
      title
    }
  }
`;
export const GET_POSTS_OF_AUTHOR = gql`
  query GetPostsOfAuthor($authorId: Int!) {
    postsOf(authorId: $authorId) {
      id
      title
    }
  }
`;

export const GET_FEED = gql`
  query GetFeed {
    authors {
      id
      firstName
      lastName
    }
    posts {
      id
      title
    }
  }
`;
