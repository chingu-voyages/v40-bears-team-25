// note: if you try to import mongoose object, Error will be undefined and you won't be able to access ValidationError
import { Error } from 'mongoose'
import { connectMongo, disconnectMongo } from '../../lib'
import User from '../../models/userModel'

const mockUser = {
	firstName: 'Mike',
	lastName: 'Ross',
	email: 'mike.ross@pearsonspecter.com',
	passwordHash: 'testhash',
}

type UserData = typeof mockUser

const testUser = async (userData: UserData) => {
	const user = new User(userData)

	try {
		await user.save()
	} catch (error) {
		return error
	}
	return 0
}

describe('User Model', () => {
	beforeAll(async () => {
		await connectMongo()
	})

	test('should not return an error if all fields are valid', async () => {
		const validationError = await testUser(mockUser)

		expect(validationError).toBeFalsy()
	})

	test('should return a ValidationError if email does not match regEx', async () => {
		const error = await testUser({
			...mockUser,
			email: 'invalid email',
		})

		expect(error).toBeInstanceOf(Error.ValidationError)
		if (error instanceof Error.ValidationError) {
			// error.errors is an object that has as keys the
			// names of the invalid items
			expect(error.name).toBe('ValidationError')
			expect(Object.keys(error.errors).includes('email')).toBe(true)
		}
	})

	test('should return a ValidationError if FirstName is too short/long', async () => {
		const shortError = await testUser({
			...mockUser,
			firstName: 'M',
			lastName: 'R',
		})

		const longError = await testUser({
			...mockUser,
			firstName: 'aaaaaaaaaaaaaaaaaaaaaaaaaa',
			lastName: 'aaaaaaaaaaaaaaaaaaaaaaaaaa',
		})

		const errors = [shortError, longError]

		errors.forEach((error) => {
			expect(error).toBeInstanceOf(Error.ValidationError)

			if (error instanceof Error.ValidationError) {
				const keys = Object.keys(error.errors)

				expect(keys).toEqual(['firstName', 'lastName'])
			}
		})
	})

	afterAll(() => {
		disconnectMongo()
	})
})
