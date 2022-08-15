import { NextApiRequest, NextApiResponse } from 'next'

interface User {
	name: string
	email: string
	password: string
	profile: {
		type?: 'personalTrainer' | 'customer'
	}
}

interface UserEditRequest extends NextApiRequest {
	body: {
		user: User // Create shared type in @types
	}
}

const handleUserRequest = (req: UserEditRequest, res: NextApiResponse) => {
	switch (req.method) {
		case 'PUT': {
			// get new user object from request body
			// const { user } = req.body

			// if it isn't a request to change the password, go ahead. Otherwise check that old password corresponds

			// check the token sent in the request to see if the user is actually who he claims to be
			// if the token corresponds allow, otherwise 401

			// get user from database / edit it directly (see mongoose docs)

			// edit the field

			// save the new document

			// return 200 and the new user object
			return res.status(500).send('still to implement')
		}

		// Further down the road, we can implement GET requests and DELETE requests to get/delete users from db

		default: {
			return res.status(500).send('This method is not supported')
		}
	}
}

export default handleUserRequest
