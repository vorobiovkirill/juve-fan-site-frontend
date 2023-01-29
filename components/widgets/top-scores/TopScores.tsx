import scoresJson from '@/mocks/scores.json'
import type { ITopScoresResponse } from '@/components/widgets/top-scores/TopScores.types'
import { TopScoresItem } from '@/components/widgets/top-scores/TopScoresItem'
import { getTopScores } from '@/utils/getTopScores'
// import { WidgetSkeleton } from '../WidgetSkeleton'

interface IPlayers {
  title: string
}

export const TopScores: React.FC<IPlayers> = ({ title }) => {
  const scores = getTopScores(scoresJson.response as ITopScoresResponse[])

  // const { standings, error, isLoading } = useGetStandings('/players/topscorers?season=2022&league=135');

  // if (error) return <div>Failed to fetch users.</div>;

  // if (isLoading) return <WidgetSkeleton />

  return (
    <div className='w-full rounded overflow-hidden shadow-lg bg-white border border-customYellow'>
      <div className='px-3 py-4 dark:bg-gray-800'>
        <h2 className='text-2xl font-bold dark:text-white'>{title}</h2>
      </div>
      <div className='flex bg-gray-100'>
        <span className='w-10 text-center'>#</span>
        <span className='flex-1 text-center'>Ім'я</span>
        <span className='w-10 text-center'>І</span>
        <span className='w-10 text-center'>Г</span>
        <span className='w-10 text-center'>Г+П</span>
      </div>
      <div className='flex flex-col'>
        {scores.map((item, index) => (
          <TopScoresItem key={item.id} index={index + 1} item={item} />
        ))}
      </div>
    </div>
  )
}
