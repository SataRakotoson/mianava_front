import { withApollo } from 'next-apollo';
import { InMemoryCache } from 'apollo-boost';
import { ApolloClient } from '@apollo/client/core';

const API_URI = `${process.env.NEXT_PUBLIC_SERVER_URL}/graphql`;

const apolloClient = new ApolloClient( {
    uri: API_URI,
    cache: new InMemoryCache()
} );

export default withApollo( apolloClient );