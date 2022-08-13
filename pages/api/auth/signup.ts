import type { NextApiRequest, NextApiResponse } from 'next'

export default function handleSignup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res
			.status(400)
			.send('You can only send POST requests to this endpoint')
	}

	const { firstName, lastName, email, password } = req.body

	return res.status(200).json({
		firstName,
		lastName,
		email,
		password,
	})
}
