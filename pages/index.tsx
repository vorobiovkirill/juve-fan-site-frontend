import Head from 'next/head'
import { useGetNewsPostsQuery } from '../generated/types-and-hooks'
import { Feed } from '@/components/Feed'
import { Sidebar } from '@/components/Sidebar'

export default function Home() {

  const { data, loading } = useGetNewsPostsQuery({
    variables: {
      pagination: {
        page: 1,
        pageSize: 2
      }
    }
  });

  if (loading) return <div>loading...</div>;

  return (
    <>
      <Head>
        <title>Juve Fan Site</title>
        <meta name="description" content="Juventus Ukraine fan site" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar />
      <Feed data={data?.newsposts?.data || []} />
    </>
  )
}
