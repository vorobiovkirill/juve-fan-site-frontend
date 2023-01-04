import '../styles/globals.css'
import type { AppContext, AppInitialProps } from 'next/app'
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "../lib/apollo-client"

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
