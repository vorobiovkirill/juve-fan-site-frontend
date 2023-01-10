import Head from 'next/head'
import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Layout } from '@/components/common/Layout'

const Home = () => {
  return (
    <>
      <Head>
        <title>Juve Fan Site</title>
        <meta name="description" content="Juventus Ukraine fan site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Feed />

    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
