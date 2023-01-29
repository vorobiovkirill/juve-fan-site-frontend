import Link from 'next/link'
import { IFeedView } from './Feed.types'

export const ListFeedItem: React.FC<IFeedView> = ({ feed }) => {
  return (
    <div>
      <ul>
        {feed.map((item) => (
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
