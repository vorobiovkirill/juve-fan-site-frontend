import type { Newspost, NewspostEntity } from 'generated/types-and-hooks'

export interface IFeed {
  title: string
  view?: FeedView
}

export interface FeedItemProps {
  createdAt: Newspost['createdAt']
  id: NewspostEntity['id']
  imageUrl: Newspost['imageUrl']
  title: Newspost['title']
  slug: Newspost['slug']
}

export interface IFeedView {
  feed: NewspostEntity[]
  title: string
}

export type FeedView = 'list' | 'cards' | 'default'
