import json from '../mocks/standings.json'
import { Standings } from './widgets/standings/Standings'
// import { useGetStandings } from 'api/useRequest';

interface ISidebar {
  standingsTitle: string
}

export const Sidebar: React.FC<ISidebar> = ({ standingsTitle }) => {
  // const { standings, error, isLoading } = useGetStandings('/standings?season=2022&league=135');

  // if (error) return <div>Failed to fetch users.</div>;
  // if (isLoading) return <h2>Loading...</h2>;

  const standings = json?.response[0].league.standings.flat() || []

  return (
    <aside aria-label='Sidebar'>
      <Standings standings={standings} standingsTitle={standingsTitle} />
    </aside>
  )
}
