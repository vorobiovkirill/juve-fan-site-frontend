import { Newspost, NewspostEntity } from 'generated/types-and-hooks'
import Link from 'next/link'
import React from 'react'
import { getPublishDate } from '@/utils/date'

interface FeedItemProps {
    createdAt: Newspost['createdAt'],
    id: NewspostEntity['id'],
    imageUrl: Newspost['imageUrl'],
    title: Newspost['title'],
    slug: Newspost['slug'],
}

export const FeedItem: React.FC<FeedItemProps> = ({ id = '', createdAt = '', imageUrl = '', title = '', slug = '' }) => {
    const publishDate = getPublishDate(createdAt);

    return (
        <Link className="w-full" href={{
            pathname: `/news/${slug}`,
            query: {
                id,
            },
        }}>
            <div className="flex flex-col justify-between  rounded overflow-hidden shadow-lg bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <img className="object-cover h-48 w-full" src={imageUrl} alt={slug} />
                <div className="p-4">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </div>
                <div className="p-2 flex flex-row justify-between">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{publishDate}</span>
                </div>
            </div>
        </Link>

    )
}
