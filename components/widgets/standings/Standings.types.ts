import type { IRapidApiResponse } from 'api/types'

export interface IStandings extends IRapidApiResponse {
  response: IStandingsResponse[]
}

export interface IStandingsResponse {
  league: IResponseLeague
}

export interface IResponseLeague {
  id: number
  name: string
  country: string
  logo: string
  flag: string
  season: number
  standings: Array<Array<IStandingItem>>
}

export interface IStandingItem {
  rank: number
  team: IStandingTeam
  points: number
  goalsDiff: number
  group: string
  form: string
  status: string
  description: string | null
  all: IStatistic
  home: IStatistic
  away: IStatistic
  update: string
}

export interface IStandingTeam {
  id: number
  name: string
  logo: string
}

export interface IStatistic {
  played: number
  win: number
  draw: number
  lose: number
  goals: IGoal
}

export interface IGoal {
  for: number
  against: number
}
