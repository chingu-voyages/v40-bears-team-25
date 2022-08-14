import type { NextApiRequest, NextApiResponse } from 'next'
import { handleError, database } from '../../../lib'
import hashPassword from '../../../lib/hashPassword'
import User from '../../../models/userModel'

export default async function handleSignup(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// If it is not a POST request, a Bad Response is returned
	if (req.method !== 'POST') {
		return res
			.status(400)
			.send('You can only send POST requests to this endpoint')
	}

	// Connect to MongoDB
	const connectionError = await database.connectMongo()

	if (connectionError) {
		console.error(connectionError)
		return res.status(500).send(connectionError)
	}

	// pull the input from request body
	const { firstName, lastName, email, password } = req.body

	// Checks for password, otherwise bcrypt will throw error. Other paths are validated when saving
	if (!password) {
		return res.status(400).send({ password: 'password is required' })
	}

	// hash the password
	const passwordHash = await hashPassword(password)

	// create user from model
	const user = new User({
		firstName,
		lastName,
		email,
		passwordHash,
	})

	// save the user into the database (validation happens here)
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
