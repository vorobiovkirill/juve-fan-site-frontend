import { gql, useQuery } from '@apollo/client'

const GET_NEWS = gql`
query NewsPosts {
  newsposts {
    data {
      attributes {
        title
        writtenBy
        imageUrl
        publishedAt
        createdAt
        updatedAt
      }
    }
  }
}
`

export const News = () => {
    const { data, loading } = useQuery(GET_NEWS)
    return (
        <div>{JSON.stringify(data, null, 2)}</div>
    )
}
