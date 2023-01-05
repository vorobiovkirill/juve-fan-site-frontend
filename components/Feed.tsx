import { useGetNewsPostsQuery } from '../generated/types-and-hooks'

export const Feed = () => {
  const { data, loading } = useGetNewsPostsQuery({
    variables: {
      pagination: {
        page: 1,
        pageSize: 2
      }
    }
  });

  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}
