import Link from 'next/link'
import { IFeedView } from '@/components/feed/Feed.types'
import { getPublishDate } from '@/utils/date'

export const ListFeed: React.FC<IFeedView> = ({ feed, title }) => {
  return (
    <div>
      <h2 className='text-3xl font-bold dark:text-white mb-4 border-b border-gray-200'>
        {title}
      </h2>
      <div className='p-2'>
        <ul>
          {feed.map((item) => (
            <li key={item.id} className='mb-2'>
              <span className='font-light text-sm text-gray-600 mr-4'>
                {getPublishDate(item.attributes?.createdAt, 'allNewsFormat')}
              </span>
              <Link
                className='hover:underline hover:text-customYellow'
                href={`news/${item.attributes?.slug}` || ''}
              >
                {item.attributes?.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
