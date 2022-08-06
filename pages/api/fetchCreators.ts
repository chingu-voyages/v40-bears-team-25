import { NextApiRequest, NextApiResponse } from 'next'

export interface CreatorsInterface {
	name: string
	local: string
	timeLocale: string
}

const fetchCreators = (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'GET') {
		try {
			const creators: CreatorsInterface[] = [
				{ name: 'Akram', local: 'Egypt', timeLocale: 'GMT +2' },
				{ name: 'Andrea', local: 'Italy', timeLocale: 'GMT +2' },
				{ name: 'Franklin', local: 'Nigeria', timeLocale: 'GMT +1' },
				{ name: 'Mark', local: 'Spain', timeLocale: 'GMT +2' },
				{ name: 'Moody', local: 'Nigeria', timeLocale: 'GMT +1' },
			]

			res.status(200).json({ data: creators })
		} catch (err) {
			res.status(500).json({ message: err })
			throw new Error('Something went wrong obtaining the request')
		}
	}
}

export default fetchCreators
