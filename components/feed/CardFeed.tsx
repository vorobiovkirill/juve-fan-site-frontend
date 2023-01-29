import { CardFeedItem } from '@/components/feed/CardFeedItem'
import { IFeedView } from '@/components/feed/Feed.types'

export const CardFeed: React.FC<IFeedView> = ({ feed, title }) => {
  return (
    <>
      <h2 className='text-3xl font-bold dark:text-white mb-4 border-b border-gray-200'>
        {title}
      </h2>
      <div className='mb-8 flex flex-wrap gap-y-4'>
        {feed?.map((item) => {
          return (
            <CardFeedItem
              key={item.id}
              id={item.id}
              createdAt={item.attributes?.createdAt}
              imageUrl={item.attributes?.imageUrl || ''}
              title={item.attributes?.title || ''}
              slug={item.attributes?.slug || ''}
            />
          )
        })}
      </div>
    </>
  )
}
