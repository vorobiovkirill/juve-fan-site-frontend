import Head from 'next/head'
import { Feed } from '@/components/feed/Feed'
import { Sidebar } from '@/components/Sidebar'
import { Layout } from '@/components/common/Layout'
import { useGetHomePageDataQuery } from '@/generated/types-and-hooks'

const Home = () => {
  const { data, loading } = useGetHomePageDataQuery()

  if (loading) return <div>Loading</div>

  const meta = data?.homePage?.data?.attributes

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name='description' content={meta?.description || ''} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>

      <Sidebar
        standingsTitle={meta?.standingsTitle || ''}
        topScoresTitle={meta?.topScoresTitle || ''}
      />
      <Feed title={meta?.feedTitle || ''} />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>
}
