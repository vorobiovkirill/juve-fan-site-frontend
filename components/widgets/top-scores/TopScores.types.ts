import { IRapidApiResponse } from 'api/types'

export interface ITopScores extends IRapidApiResponse {
  response: ITopScoresResponse[]
}

export interface ITopScoresResponse {
  player: ITopScoresPlayer
  statistics: ITopScoresStatistics[]
}

export interface ITopScoresPlayer {
  id: number
  name: string
  firstname: string
  lastname: string
  age: number
  birth: ITopScoresPlayerBirth
  nationality: string
  height: string
  weight: string
  injured: boolean
  photo: string
}

export interface ITopScoresStatistics {
  team: ITopScoresStatisticsTeam
  league: ITopScoresStatisticsLeague
  games: ITopScoresStatisticsGames
  substitutes: ITopScoresStatisticsSubstitutes
  shots: ITopScoresStatisticsShots
  goals: ITopScoresStatisticsGoals
  passes: ITopScoresStatisticsPasses
  tackles: ITopScoresStatisticsTackles
  duels: ITopScoresStatisticsDuels
  dribbles: ITopScoresStatisticsDribbles
  fouls: ITopScoresStatisticsFouls
  cards: ITopScoresStatisticsCards
  penalty: ITopScoresStatisticsPenalty
}

export interface ITopScoresPlayerBirth {
  date: string
  place: string
  country: string
}

export interface ITopScoresStatisticsTeam {
  id: number
  name: string
  logo: string
}

export interface ITopScoresStatisticsLeague {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
}

export interface ITopScoresStatisticsGames {
  appearences: number
  lineups: number
  minutes: number
  number: null
  position: string
  rating: string
  captain: boolean
}

export interface ITopScoresStatisticsSubstitutes {
  in: number
  out: number
  bench: number
}
export interface ITopScoresStatisticsShots {
  total: number
  on: number
}

export interface ITopScoresStatisticsGoals {
  total: number
  conceded: number
  assists: number
  saves: number | null
}
export interface ITopScoresStatisticsPasses {
  total: number
  key: number
  accuracy: number
}

export interface ITopScoresStatisticsTackles {
  total: number
  blocks: number
  interceptions: number
}

export interface ITopScoresStatisticsDuels {
  total: number
  won: number
}

export interface ITopScoresStatisticsDribbles {
  attempts: number | null
  success: number | null
  past: number | null
}

export interface ITopScoresStatisticsFouls {
  drawn: number
  committed: number
}

export interface ITopScoresStatisticsCards {
  yellow: number
  yellowred: number
  red: number
}

export interface ITopScoresStatisticsPenalty {
  won: number | null
  commited: number | null
  scored: number | null
  missed: number | null
  saved: number | null
}

export type TopScoresData = {
  id: ITopScoresPlayer['id']
  name: ITopScoresPlayer['name']
  firstname: ITopScoresPlayer['firstname']
  lastname: ITopScoresPlayer['lastname']
  appearences: ITopScoresStatisticsGames['appearences']
  goals: ITopScoresStatisticsGoals['total']
  penalty: ITopScoresStatisticsPenalty['scored']
  team: ITopScoresStatisticsTeam['name']
}
