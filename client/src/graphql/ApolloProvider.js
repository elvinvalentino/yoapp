import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  split
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { WebSocketLink } from '@apollo/client/link/ws';
import { getMainDefinition } from '@apollo/client/utilities';

const httpLink = createHttpLink({
  uri: 'http://localhost:5000'
});

const authLink = setContext(() => {
  const token = localStorage.getItem('token') || "";

  return {
    headers: {
      "Access-Token": token
    }
  }
});

const wsLink = new WebSocketLink({
  uri: 'ws://localhost:5000/graphql',
  options: {
    reconnect: true,
    connectionParams: () => ({
      'Access-Token': localStorage.getItem('token')
    })
  },
});

export const changeSubscriptionToken = token => {
  if (wsLink.subscriptionClient.connectionParams['Access-Token'] === token) {
    return
  }

  wsLink.subscriptionClient.connectionParams['Access-Token'] = token
  wsLink.subscriptionClient.close()
  wsLink.subscriptionClient.connect()
}

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  authLink.concat(httpLink),
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache()
});

const ApolloProviderComponent = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
)

export default ApolloProviderComponent;