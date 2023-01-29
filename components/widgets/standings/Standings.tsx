import standingsJson from '@/mocks/standings.json'
// import { useGetStandings } from 'api/useRequest';

import { getPublishDate } from '@/utils/date'
import { StandingItem } from './StandingsItem'
// import { WidgetSkeleton } from '../WidgetSkeleton'

interface IStandings {
  title: string
}

export const Standings: React.FC<IStandings> = ({ title }) => {
  // const { standings, error, isLoading } = useGetStandings('/standings?season=2022&league=135');
  const standings = standingsJson?.response[0].league.standings.flat() || []
  const date = new Date(Date.now())

  // if (error) return <div>Failed to fetch users.</div>;

  // if (isLoading) return <WidgetSkeleton />

  return (
    <div className='mb-10 w-full rounded overflow-hidden shadow-lg bg-white border border-customYellow'>
      <div className='px-3 py-4 dark:bg-gray-800'>
        <h2 className='text-2xl font-bold dark:text-white'>{title}</h2>
      </div>
      <div className='flex bg-gray-100'>
        <span className='w-10 text-center'>#</span>
        <span className='flex-1 text-center'>
          {getPublishDate(date, 'publishDate')}
        </span>
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
