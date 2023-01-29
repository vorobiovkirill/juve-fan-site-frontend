const optionsConfig: Record<OptionsConfigKeys, Intl.DateTimeFormatOptions> = {
  publishDate: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  allNewsFormat: {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
  },
}

type OptionsConfigKeys = 'publishDate' | 'allNewsFormat'

export const getPublishDate = (
  createdAt: Date | string,
  format: OptionsConfigKeys
): string => {
  const date = new Date(createdAt)

  const publishDate = new Intl.DateTimeFormat(
    'default',
    optionsConfig[format]
  ).format(date)

  return publishDate
}
