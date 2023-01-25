import type { ISeasonStandings, IStandingItem } from './SeasonStandings.types';
import Image from 'next/image';

const StandingItem = ({ item }: { item: IStandingItem }) => {
    return (
        <div className='flex align-center'>
            <span className='w-10 text-center'>{item.rank}</span>
            <div className='flex-1'>
              <div>
                {/* <Image src={item.team.logo} alt={item.team.name} width={30} height={30} quality={50} /> */}
              </div>
              {item.team.name}
              </div>
            <span className='w-10 text-center'>{item.all.played}</span>
            <span className='w-10 text-center'>{item.points}</span>
        </div>
    );
};

export const SeasonStandings: React.FC<ISeasonStandings> = ({ standings }) => {
    return (
        <div className='standings-table w-full mt-2 border border-customYellow'>
            <div className='flex'>
                <span className='w-10 text-center'>#</span>
                <span className='flex-1'>Склад</span>
                <span className='w-10 text-center'>М</span>
                <span className='w-10 text-center'>О</span>
            </div>
            {standings.map((item) => (
                <StandingItem item={item} />
            ))}
        </div>
    );
};
