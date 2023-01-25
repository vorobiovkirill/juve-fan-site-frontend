import json from '../mocks/standings.json'
import { SeasonStandings } from './widgets/standings/Standings'
// import { useGetStandings } from 'api/useRequest';

export const Sidebar = () => {
  // const { standings, error, isLoading } = useGetStandings('/standings?season=2022&league=135');

  // if (error) return <div>Failed to fetch users.</div>;
  // if (isLoading) return <h2>Loading...</h2>;

  const standings = json?.response[0].league.standings.flat() || []

  return (
    <aside aria-label='Sidebar'>
      <SeasonStandings standings={standings} />
    </aside>
  )
}
