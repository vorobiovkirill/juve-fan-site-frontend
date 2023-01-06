import Head from 'next/head'
import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'

const Home = () => {
  return (
    <>
      <Head>
        <title>Juve Fan Site</title>
        <meta name="description" content="Juventus Ukraine fan site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto mb-4 mt-4">
        <main className="grid grid-cols-[400px_minmax(400px,_1fr)] gap-x-4">
          <Sidebar />
          <Feed />
        </main>
      </div>
    </>
  )
}

export default Home