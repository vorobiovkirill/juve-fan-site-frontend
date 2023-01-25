import json from '../mocks/standings.json';
import { SeasonStandings } from './SeasonStandings/SeasonStandings';
import { useGetStandings } from 'api/useRequest';

export const Sidebar = () => {
    const { standings, error, isLoading } = useGetStandings('/standings?season=2022&league=135');

    if (error) return <div>Failed to fetch users.</div>;
    if (isLoading) return <h2>Loading...</h2>;

    return (
        <aside className='bg-white' aria-label='Sidebar'>
            <div className='border-b px-3 py-4 overflow-y-auto rounded dark:bg-gray-800'>
                <h2 className='text-2xl font-bold dark:text-white'>Турнірна таблиця</h2>
            </div>
            <SeasonStandings standings={standings} />
        </aside>
    );
};
