import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import createUploadLink from 'apollo-upload-client/public/createUploadLink.js';
const isBrowser = typeof window !== 'undefined';

const uri = '';

const httpLink = createHttpLink({
  uri,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: '',
      // session: token ? `${token}` : "",
    },
  };
});

export const client = new ApolloClient({
  // uri,
  link: authLink.concat(httpLink).concat(createUploadLink({ uri })),
  cache: new InMemoryCache(),
});
