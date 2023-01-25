export interface ISeasonStandings {
  standings: IStandingItem[]
}

export interface IStandingTeam {
  id: number
  name: string
  logo: string
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

export interface IGoal {
  for: number
  against: number
}

export interface IStatistic {
  played: number
  win: number
  draw: number
  lose: number
  goals: IGoal
}

export interface IParameters {
  league: string
  season: string
}

export interface IPaging {
  current: number
  total: number
}

export interface IResponse {
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

export interface IFootballApiResponse {
  get: string
  parameters: IParameters
  errors: unknown[]
  results: number
  paging: IPaging
  response: IResponse[]
}
