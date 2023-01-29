import { useState } from 'react'

import {
  NewspostEntity,
  useGetAllNewsPostsQuery,
} from '@/generated/types-and-hooks'
import { Pagination } from '@/components/Pagination'
import { CardFeed } from '@/components/feed/CardFeed'
import { ListFeed } from '@/components/feed/ListFeed'
import type { IFeed } from '@/components/feed/Feed.types'
import { CardFeedSkeleton } from './CardFeedSkeleton'

export const Feed: React.FC<IFeed> = ({ title, view = 'default' }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const { data, loading } = useGetAllNewsPostsQuery({
    variables: {
      pagination: {
        page: currentPage,
        pageSize: 10,
      },
      sort: ['createdAt:desc'],
    },
  })

  const feed = data?.newsposts?.data as NewspostEntity[]
  const pagination = data?.newsposts?.meta.pagination

  const onPageChange = (page: number): void => {
    setCurrentPage(page)
  }

  const onPageBack = (): void => {
    setCurrentPage((prevState) => prevState - 1)
  }

  const onPageNext = (): void => {
    setCurrentPage((prevState) => prevState + 1)
  }

  if (loading) {
    const skeleton = [
      ...Array.from({ length: 10 }, (i) => <CardFeedSkeleton />),
    ]
    return <div className='mb-8 flex flex-wrap gap-y-4'>{skeleton}</div>
  }

  return (
    <main>
      <section className='bg-white p-4'>
        {view === 'default' || view === 'cards' ? (
          <CardFeed feed={feed} title={title} />
        ) : null}
        {view === 'list' ? <ListFeed feed={feed} title={title} /> : null}
        <Pagination
          currentPage={currentPage}
          pageCount={pagination?.pageCount || 1}
          onPageChange={onPageChange}
          onPageBack={onPageBack}
          onPageNext={onPageNext}
        />
      </section>
    </main>
  )
}
