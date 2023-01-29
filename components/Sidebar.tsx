import scoresJson from '../mocks/scores.json'
import { TopScores } from './widgets/top-scores/TopScores'
import { Standings } from './widgets/standings/Standings'
import { getTopScores } from '@/utils/getTopScores'
import { ITopScoresResponse } from './widgets/top-scores/TopScores.types'

interface ISidebar {
  standingsTitle: string
  topScoresTitle: string
}

export const Sidebar: React.FC<ISidebar> = ({
  standingsTitle,
  topScoresTitle,
}) => {
  const scores = getTopScores(scoresJson.response as ITopScoresResponse[])
  console.log('scores', scores)

  return (
    <aside aria-label='Sidebar'>
      <Standings title={standingsTitle} />
      <TopScores scores={scores} title={topScoresTitle} />
    </aside>
  )
}
