import { TopScores } from '@/components/widgets/top-scores/TopScores'
import { Standings } from '@/components/widgets/standings/Standings'

interface ISidebar {
  standingsTitle: string
  topScoresTitle: string
}

export const Sidebar: React.FC<ISidebar> = ({
  standingsTitle,
  topScoresTitle,
}) => {
  return (
    <aside aria-label='Sidebar'>
      <Standings title={standingsTitle} />
      <TopScores title={topScoresTitle} />
    </aside>
  )
}
