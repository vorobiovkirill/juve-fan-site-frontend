import Head from 'next/head'

import { News } from '@/components/News'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Juve Fan Site</title>
        <meta name="description" content="Juventus Ukraine fan site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <section className="bg-gray-400">
        CONTENT
        <News />
      </section>
      <Sidebar />

    </>
  )
}