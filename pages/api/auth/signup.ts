import type { NextApiRequest, NextApiResponse } from 'next'
import connectMongo from '../../../lib/connectMongo'
import hashPassword from '../../../lib/hashPassword'
import User from '../../../models/userModel'

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

	// Validation

	// hash the password
	const passwordHash = await hashPassword(password)

	// create user from model
	const user = new User({
		firstName,
		lastName,
		email,
		passwordHash,
	})

	// await save user
	await user.save()

	// return created user without password hash
	return res.status(200).json({
		firstName,
		lastName,
		email,
	})
}
