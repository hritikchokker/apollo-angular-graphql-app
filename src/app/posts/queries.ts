import { gql } from '@apollo/client/core';

export const GET_POST = gql`
  query GetPosts {
    posts {
      id
      title
      votes
    }
  }
`;
export const GET_POSTS_OF_AUTHOR = gql`
  query GetPostsOfAuthor($authorId: Int!) {
    postsOf(authorId: $authorId) {
      id
      title
      votes
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
      votes
    }
  }
`;

export const UPVOTE_POST = gql`
  mutation UpvotePost {
    upvotePost(postId: 12) {
      id
      votes
    }
  }
`;
