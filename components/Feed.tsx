
import { useState } from 'react'

import { useGetAllNewsPostsQuery } from '../generated/types-and-hooks'
import { Pagination } from '@/components/Pagination'
import { FeedItem } from '@/components/FeedItem'

export const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useGetAllNewsPostsQuery({
    variables: {
      pagination: {
        page: currentPage,
        pageSize: 10
      },
      sort: ["createdAt:desc"]
    }
  });

  if (loading) return <div>loading...</div>

  const feed = data?.newsposts?.data
  const pagination = data?.newsposts?.meta.pagination

  const onPageChange = (page: number): void => {
    setCurrentPage(page);
  };

  const onPageBack = (): void => {
    setCurrentPage((prevState) => prevState - 1);
  }

  const onPageNext = (): void => {
    setCurrentPage((prevState) => prevState + 1);
  }

  return (
    <main>
      <section className="p-4 bg-white">
        <h2 className="text-3xl font-bold dark:text-white mb-4 border-b border-gray-200">Новини</h2>
        <div className="mb-8">
          {feed?.map((item) => {
            return (
              <FeedItem
                key={item.id}
                id={item.id}
                createdAt={item.attributes?.createdAt}
                imageUrl={item.attributes?.imageUrl || ''}
                title={item.attributes?.title || ''}
                slug={item.attributes?.slug || ''}
              />)
          })}
        </div>
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
