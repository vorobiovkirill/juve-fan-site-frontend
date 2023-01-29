import { NewsPageLayout } from '@/components/common/NewsPageLayout'
import { Feed } from '@/components/feed/Feed'

const NewsPosts = () => {
  return <Feed title='All News' view='list' />
}

export default NewsPosts

NewsPosts.getLayout = function getLayout(page: React.ReactElement) {
  return <NewsPageLayout>{page}</NewsPageLayout>
}
