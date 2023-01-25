import Image from 'next/image'
import type { IStandingItem } from './Standings.types'

const stylesForChampionsLeague = `
    [&:nth-child(-n+3)]:before:content-[""]
    [&:nth-child(-n+3)]:before:block
    [&:nth-child(-n+3)]:before:absolute
    [&:nth-child(-n+3)]:before:w-1
    [&:nth-child(-n+3)]:before:h-full
    [&:nth-child(-n+3)]:before:bg-championsLeague
    [&:nth-child(-n+3)]:before:top-0
    [&:nth-child(-n+3)]:before:left-0
`

const stylesForEuropaLeague = `
    [&:nth-child(4)]:before:content-[""]
    [&:nth-child(4)]:before:block
    [&:nth-child(4)]:before:absolute
    [&:nth-child(4)]:before:w-1
    [&:nth-child(4)]:before:h-full
    [&:nth-child(4)]:before:bg-europaLeague
    [&:nth-child(4)]:before:top-0
    [&:nth-child(4)]:before:left-0
`

export const StandingItem = ({ item }: { item: IStandingItem }) => {
	const isActive =
		item.team.name === 'Juventus'
			? 'bg-customYellow hover:bg-customYellowHover font-bold'
			: ''
	return (
		<div
			className={`${isActive} flex items-center py-1.5 border-b border-gray-200 relative hover:bg-gray-100 ${stylesForChampionsLeague} ${stylesForEuropaLeague}`}
		>
			<span className="w-10 text-center">{item.rank}</span>
			<div className="flex-1">
				<div className="flex items-center gap-x-4">
					<Image
						src={item.team.logo}
						alt={item.team.name}
						width={25}
						height={25}
					/>
					<span>{item.team.name}</span>
				</div>
			</div>
			<span className="w-10 text-center">{item.all.played}</span>
			<span className="w-10 text-center">{item.points}</span>
		</div>
	)
}
