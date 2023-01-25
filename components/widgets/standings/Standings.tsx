import type { ISeasonStandings } from './Standings.types'

import { getPublishDate } from '@/utils/date'
import { StandingItem } from './StandingsItem'

export const SeasonStandings: React.FC<ISeasonStandings> = ({ standings }) => {
  const date = new Date(Date.now())
  return (
    <div className='standings-table w-full rounded overflow-hidden shadow-lg bg-white border border-customYellow'>
      <div className='px-3 py-4 dark:bg-gray-800'>
        <h2 className='text-2xl font-bold dark:text-white'>Турнірна таблиця</h2>
      </div>
      <div className='flex bg-gray-100'>
        <span className='w-10 text-center'>#</span>
        <span className='flex-1 text-center'>{getPublishDate(date)}</span>
        <span className='w-10 text-center'>М</span>
        <span className='w-10 text-center'>О</span>
      </div>
      <div className='flex flex-col'>
        {standings.map((item) => (
          <StandingItem key={item.team.id} item={item} />
        ))}
      </div>
    </div>
  )
}
