import {
  ITopScoresResponse,
  TopScoresData,
} from '@/components/widgets/top-scores/TopScores.types'

export const getTopScores = (data: ITopScoresResponse[]): TopScoresData[] => {
  const result = data.map((item) => ({
    id: item.player.id,
    name: item.player.name,
    firstname: item.player.firstname,
    lastname: item.player.lastname,
    appearences: item.statistics[0].games.appearences,
    goals: item.statistics[0].goals.total,
    penalty: item.statistics[0].penalty.scored,
    team: item.statistics[0].team.name,
  }))
  console.log('result', result)
  return result
}
