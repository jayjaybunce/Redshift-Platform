/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Posts
// ====================================================

export interface Posts_posts {
  __typename: "Posts";
  id: string;
  name: string | null;
  description: string | null;
  updated_at: any;
  views: any | null;
}

export interface Posts {
  posts: (Posts_posts | null)[] | null;
}
