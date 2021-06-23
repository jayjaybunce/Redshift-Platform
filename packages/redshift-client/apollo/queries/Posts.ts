import gql from 'graphql-tag'

export const CMS_POST_FRAGMENT = gql`
    fragment PostFragment on Posts {
        id
        name
        description
        views
        created_at
        updated_at
    }
`

export const GET_POSTS = gql`
    query Posts{
	posts{
        id
        name
        description
        updated_at
        views
  }
}
`

