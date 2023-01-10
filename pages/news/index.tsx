import { Layout } from '@/components/common/Layout';
import Link from 'next/link'
import { useGetAllNewsPostsQuery } from '../../generated/types-and-hooks'

const NewsPosts = () => {

  const { data, loading } = useGetAllNewsPostsQuery({
    variables: {
      pagination: {
        page: 1,
        pageSize: 50
      },
      sort: ["createdAt:desc"]
    }
  });

  if (loading) return <div>loading...</div>

  const news = data?.newsposts?.data || []

  return (
    <div>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link href={`news/${item.attributes?.slug}` || ''}>
              {item.attributes?.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NewsPosts

NewsPosts.getLayout = function getLayout(page: React.ReactElement) {
  return <Layout>{page}</Layout>;
};
