import "../styles/globals.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloCache,
  HttpLink,
  from,
  ApolloProvider,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { SessionProvider } from "next-auth/react";

const onErrorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.map(({ message, locations, path }) => {
      alert(`Errors - ${message}`);
    });
  }
});

const link = from([
  onErrorLink,
  new HttpLink({ uri: "http://localhost:9000/graphql" }),
]);
const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}

export default MyApp;
