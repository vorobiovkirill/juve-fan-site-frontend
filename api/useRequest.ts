import useSWR from 'swr'
import type { IFootballApiResponse } from '@/components/widgets/standings/Standings.types'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RAPID_API_KEY,
		'X-RapidAPI-Host': process.env.NEXT_PUBLIC_X_RAPID_API_HOST,
	},
}

const baseUrl = process.env.NEXT_PUBLIC_RAPID_API_FOOTBALL

const fetcher = (url: string): Promise<IFootballApiResponse> =>
	fetch(url, options).then((res) => res.json())

export const useGetStandings = (path: string) => {
	if (!path) {
		throw new Error('Path is required')
	}

	const url = baseUrl + path

	const { data, error, isLoading } = useSWR(url, fetcher, {
		revalidateIfStale: false,
		revalidateOnFocus: false,
		revalidateOnReconnect: false,
	})

	const standings = data?.response[0].league.standings.flat() || []

	return { isLoading, standings, error }
}
