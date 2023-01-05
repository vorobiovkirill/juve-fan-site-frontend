
import { Pagination } from '@/components/Pagination'
import { FeedItem } from '@/components/FeedItem'
import { NewspostEntity } from 'generated/types-and-hooks'

type FeedProps = {
  data: NewspostEntity[]
}

export const Feed = ({ data }: FeedProps) => {
  return (
    <section className="bg-gray-100 p-4">
      <h2 className="text-3xl font-bold dark:text-white mb-4">Новини</h2>
      <div className="flex gap-x-4 mb-8">
        {data.map((item) => <FeedItem key={item.id} data={item.attributes} />)}
      </div>
      <Pagination />
    </section>
  )
}
