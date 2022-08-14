import type { NextApiRequest, NextApiResponse } from 'next'
import { handleError, database } from '../../../lib'
import hashPassword from '../../../lib/hashPassword'
import User from '../../../models/userModel'

export default async function handleSignup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'POST') {
		return res
			.status(400)
			.send('You can only send POST requests to this endpoint')
	}
	const connectionError = await database.connectMongo()

	if (connectionError) {
		console.error(connectionError)
		return res.status(500).send(connectionError)
	}

	const { firstName, lastName, email, password } = req.body

	// hash the password
	const passwordHash = await hashPassword(password)

	// create user from model
	const user = new User({
		firstName,
		lastName,
		email,
		passwordHash,
	})

	// await save user, validation happens here
	try {
		await user.save()
	} catch (error) {
		const errors = handleError(error)
		return res.status(400).send(errors)
	}

	// return created user without password hash
	return res.status(200).json({
		firstName,
		lastName,
		email,
	})
}
