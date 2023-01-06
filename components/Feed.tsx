
import { useState } from 'react'

import { useGetNewsPostsQuery } from '../generated/types-and-hooks'
import { Pagination } from '@/components/Pagination'
import { FeedItem } from '@/components/FeedItem'

export const Feed = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading } = useGetNewsPostsQuery({
    variables: {
      pagination: {
        page: currentPage,
        pageSize: 2
      }
    }
  });

  if (loading) return <div>loading...</div>;

  const feed = data?.newsposts?.data;
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
    <section className="bg-gray-100 p-4">
      <h2 className="text-3xl font-bold dark:text-white mb-4">Новини</h2>
      <div className="flex gap-x-4 mb-8">
        {feed?.map((item) => <FeedItem key={item.id} title={item.attributes?.title || ''} slug={item.attributes?.slug || ''} />)}
      </div>
      <Pagination
        currentPage={currentPage}
        pageCount={pagination?.pageCount || 1}
        onPageChange={onPageChange}
        onPageBack={onPageBack}
        onPageNext={onPageNext}
      />
    </section>
  )
}
