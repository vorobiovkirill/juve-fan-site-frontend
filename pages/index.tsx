import Head from 'next/head'
import { Footer } from 'components/Footer'
import { Header } from 'components/Header'
import { News } from 'components/News'

export default function Home() {
  return (
    <div className="p-0 m-0 min-h-screen grid grid-rows-[auto_1fr_auto]">
      <Head>
        <title>Juve Fan Site</title>
        <meta name="description" content="Juventus Ukraine fan site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        CONTENT
        <News />
      </main>
      <Footer />
    </div>
  )
}