export interface IRapidApiResponse {
  get: string
  parameters: IParameters
  errors: IError[]
  results: number
  paging: IPaging
}

export interface IParameters {
  league: string
  season: string
}

export interface IError {
  time: string
  bug: string
  report: string
}

export interface IPaging {
  current: number
  total: number
}
