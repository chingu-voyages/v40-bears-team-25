import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../lib/connectMongo'

export default async function handleSignup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const error = await connectMongo()
	if (req.method !== 'POST') {
		return res
			.status(400)
			.send('You can only send POST requests to this endpoint')
	}

	if (error) {
		console.error(error)
		return res.json(error)
	}

	const { firstName, lastName, email, password } = req.body

	return res.status(200).json({
		firstName,
		lastName,
		email,
		password,
	})
}
