import { InMemoryCache } from "apollo-cache-inmemory"
import { ApolloClient } from '@apollo/client'
import { ApolloLink } from 'apollo-link'
import { createUploadLink } from 'apollo-upload-client'

const cache = new InMemoryCache()
export const client = new ApolloClient({
    uri: 'http://localhost:1337/graphql',
    cache
})
