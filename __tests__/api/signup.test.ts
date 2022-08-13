/* eslint-disable no-underscore-dangle */
import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, MockResponse, MockRequest } from 'node-mocks-http'
import handleSignup from '../../pages/api/auth/signup'

interface Mocks {
	req: MockRequest<NextApiRequest>
	res: MockResponse<NextApiResponse>
}

const mockUser = {
	firstName: 'Mike',
	lastName: 'Ross',
	email: 'mike.ross@harveyspecter.com',
	password: 'passwordTest',
}

describe('/auth/signup', () => {
	test('returns 200 if all the fields are valid', async () => {
		const { req, res }: Mocks = createMocks({
			method: 'POST',
			body: mockUser,
		})

		await handleSignup(req, res)

		const body = res._getJSONData()

		expect(res.statusCode).toBe(200)
		// To be changed, when we will implement a token and return the token in the response
		expect(body).toEqual(mockUser)
	})

	test('returns Code 400 if method is not POST', async () => {
		const { req, res }: Mocks = createMocks({
			method: 'GET',
			body: mockUser,
		})

		await handleSignup(req, res)

		expect(res.statusCode).toBe(400)
		expect(res._getData()).toBe(
			'You can only send POST requests to this endpoint'
		)
	})
})
