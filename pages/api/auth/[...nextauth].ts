import User from '@/models/userModel'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import bcrypt from 'bcrypt'
import { database } from '@/lib'

export default NextAuth({
	debug: process.env.NODE_ENV === 'development',
	providers: [
		Credentials({
			// The name to display on the sign in form (e.g. "Sign in with...")
			name: 'Email',
			// The credentials is used to generate a suitable form on the sign in page.
			// You can specify whatever fields you are expecting to be submitted.
			// e.g. domain, username, password, 2FA token, etc.
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				username: {
					label: 'Username',
					type: 'text',
					placeholder: 'name@email.com',
				},
				password: { label: 'Password', type: 'password' },
			},
			// req is available as well as second argument
			async authorize(credentials) {
				// Initializes connection to MongoDB
				await database.connectMongo()

				// Returns null if there are no credentials
				if (!credentials) {
					return null
				}

				// Gets user from DB
				const user = await User.findOne({ email: credentials.username })

				// Is user is not found returns null
				if (!user) return null

				// Compares the password to see if it is correct
				const isCorrect = await bcrypt.compare(
					credentials.password,
					user.passwordHash
				)

				if (isCorrect) {
					// Any object returned will be saved in `user` property of the JWT
					return user.toObject()
				}
				// If you return null then an error will be displayed advising the user to check their details.
				return null

				// You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
			},
		}),
	],
	// Custom Pages must be listed here
	pages: {
		// signIn: '/auth/signin',
		// signOut: '/auth/signout',
		// error: '/auth/error', // Error code passed in query string as ?error=
		// verifyRequest: '/auth/verify-request', // (used for check email message)
		// newUser: '/auth/new-user', // New users will be directed here on first sign in (leave the property out if not of interest)
	},
})
