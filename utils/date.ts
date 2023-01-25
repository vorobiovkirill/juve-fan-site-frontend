export const getPublishDate = (createdAt: Date | string): string => {
  const date = new Date(createdAt)

  const publishDate = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)

  return publishDate
}
