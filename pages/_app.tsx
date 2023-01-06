import '../styles/globals.css'
import type { AppContext, AppInitialProps } from 'next/app'
import { Inter } from '@next/font/google'
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "@/lib/apollo-client"
import { Layout } from '@/components/Layout'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export default function App({ Component, pageProps }: AppContext & AppInitialProps) {
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Layout className={`${inter.variable} font-sans text-customBlack p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]`}>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
