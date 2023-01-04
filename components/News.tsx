import { useQuery } from '@apollo/client'
import { NewsPostsDocument } from '../generated/graphql'

export const News = () => {
  const { data, loading } = useQuery(NewsPostsDocument)
  return (
    <div>{JSON.stringify(data, null, 2)}</div>
  )
}
