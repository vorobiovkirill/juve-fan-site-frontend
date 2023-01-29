import type { TopScoresData } from './TopScores.types'

interface ITopScoresItem {
  index: number
  item: TopScoresData
}

export const TopScoresItem: React.FC<ITopScoresItem> = ({ index, item }) => {
  const name = item.name.replace('&apos;', "'")
  const penalty = item.goals + item.penalty
  const isActive =
    item.team.toLowerCase() === 'juventus'
      ? 'bg-customYellow hover:bg-customYellowHover font-bold'
      : ''

  return (
    <div
      className={`${isActive} flex items-center py-1.5 border-b border-gray-200 relative hover:bg-gray-100`}
    >
      <span className='w-10 text-center'>{index}</span>
      <div className='flex-1'>
        <div className='flex items-center gap-x-4'>
          {/* <Image
            src={item.team.logo}
            alt={item.team.name}
            width={25}
            height={25}
          /> */}
          <span>{name}</span>
        </div>
      </div>
      <span className='w-10 text-center'>{item.appearences}</span>
      <span className='w-10 text-center'>{item.goals}</span>
      <span className='w-10 text-center'>{penalty}</span>
    </div>
  )
}
