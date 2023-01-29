import type { TopScoresData } from './TopScores.types'
import { TopScoresItem } from './TopScoresItem'

interface IPlayers {
  scores: TopScoresData[]
  title: string
}

export const TopScores: React.FC<IPlayers> = ({ scores, title }) => {
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
