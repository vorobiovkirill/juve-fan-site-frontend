import json from '../mocks/standings.json';
import useSWR from 'swr';
import { SeasonStandings } from './SeasonStandings/SeasonStandings';
import { IFootballApiResponse } from './SeasonStandings/SeasonStandings.types';

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '8727c36cbcmsh796a8cb8c15dbb0p1fc56ajsn140969907e35',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
    },
};

const baseUrl = 'https://api-football-v1.p.rapidapi.com/v3/standings?season=2022&league=135';

const getTableData = async (url: string): Promise<IFootballApiResponse> => {
    try {
        const response = await fetch(url, options)
        const json = response.json();
        return json
    } catch (error: any) {
        throw new Error(error)
    }

};

export const Sidebar = () => {
    // const { data, error, isLoading } = useSWR(baseUrl, getTableData, {
    //     revalidateIfStale: false,
    //     revalidateOnFocus: false,
    //     revalidateOnReconnect: false,
    // });
    // console.log('data', data);

    // if (error) return <div>Failed to fetch users.</div>;
    // if (isLoading) return <h2>Loading...</h2>;

    return (
        <aside className='bg-white' aria-label='Sidebar'>
            <div className='border-b px-3 py-4 overflow-y-auto rounded dark:bg-gray-800'>
                <h2 className='text-2xl font-bold dark:text-white'>Турнірна таблиця</h2>
            </div>
            <SeasonStandings standings={json.response[0].league.standings[0] || []} />
        </aside>
    );
};
