/* eslint-disable no-underscore-dangle */
import { NextApiRequest, NextApiResponse } from 'next'
import { createMocks, MockResponse, MockRequest } from 'node-mocks-http'
import { database } from '../../../lib'
import handleSignup from '../../../pages/api/auth/signup'

interface Mocks {
	req: MockRequest<NextApiRequest>
	res: MockResponse<NextApiResponse>
}

interface User {
	firstName?: string
	lastName: string
	email: string
	password?: string
}

const mockUser: User = {
	firstName: 'Mike',
	lastName: 'Ross',
	email: 'mike.ross@pearsonspecter.com',
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
		// checks that Returned user has an id property of type string
		expect(typeof body.id).toBe('string')
		// checks that API does not return a password
		expect(body.password).toBeUndefined()
		// checks that returned email corresponds to the user email
		expect(body.email).toEqual(mockUser.email)
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

	describe('invalid fields...', () => {
		test('Invalid password returns 400', async () => {
			const invalidUser = { ...mockUser }
			delete invalidUser.password

			const { req, res }: Mocks = createMocks({
				method: 'POST',
				body: invalidUser,
			})

			await handleSignup(req, res)

			const errorData = res._getData()

			expect(res.statusCode).toBe(400)
			expect(Object.keys(errorData)).toEqual(['password'])
		})

		test('Other invalid fields get checked when saving', async () => {
			const invalidUser = { ...mockUser }
			delete invalidUser.firstName

			const { req, res }: Mocks = createMocks({
				method: 'POST',
				body: invalidUser,
			})

			await handleSignup(req, res)

			const errorData = res._getData()

			expect(res.statusCode).toBe(400)
			expect(Object.keys(errorData)).toEqual(['firstName'])
		})
	})

	afterAll(async () => {
		await database.disconnectMongo()
	})
})
