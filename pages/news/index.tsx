import Link from 'next/link'
import { useGetNewsPostsQuery } from '../../generated/types-and-hooks'

const NewsPosts = () => {

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
    <div>
      <ul>
        {data?.newsposts.data.map(item => (
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