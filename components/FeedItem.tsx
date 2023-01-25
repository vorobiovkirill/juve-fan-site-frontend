import { Newspost, NewspostEntity } from 'generated/types-and-hooks'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { getPublishDate } from '@/utils/date'

interface FeedItemProps {
  createdAt: Newspost['createdAt']
  id: NewspostEntity['id']
  imageUrl: Newspost['imageUrl']
  title: Newspost['title']
  slug: Newspost['slug']
}

export const FeedItem: React.FC<FeedItemProps> = ({
  id = '',
  createdAt = '',
  imageUrl = '',
  title = '',
  slug = '',
}) => {
  const publishDate = getPublishDate(createdAt)

  return (
    <article className='w-full sm:w-full md:w-1/2 self-stretch px-2'>
      <div className='rounded overflow-hidden shadow-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
        <Link
          href={{
            pathname: `/news/${slug}`,
            query: {
              id,
            },
          }}
        >
          <div className='w-full m-0'>
            <Image
              src={imageUrl}
              alt={slug}
              width={960}
              height={500}
              quality={60}
            />
          </div>
          <div className='p-4'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {title}
            </h5>
            <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
              {publishDate}
            </span>
          </div>
        </Link>
      </div>
    </article>
  )
}
