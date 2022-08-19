// note: if you try to import mongoose object, Error will be undefined and you won't be able to access ValidationError
import { Error } from 'mongoose'
import { database } from '../../lib'
import User from '../../models/userModel'
import initializeDatabase from '../helpers/initializeDatabase'
import mockUsers from '../helpers/mockUsers'
import getUser from '../../utils/mongoose/getUser'
import { Review } from '../../models'

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
		await database.connectMongo()
	})

	describe('validation tests', () => {
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
	})

	describe('virtuals', () => {
		beforeAll(async () => {
			await initializeDatabase()
		})

		test('personalTrainerData.customers should return the list of customers', async () => {
			// using getUser to get populated user from db
			const personalTrainer = await getUser({
				email: mockUsers.personalTrainer.email,
			})
			const user = await getUser({ email: mockUsers.customer.email })

			const customers = personalTrainer.personalTrainerData?.customers

			if (!customers) {
				throw new Error('no customers found in the pt object')
			}
			expect(customers.length).toBe(1)

			const hasUserAsCustomer = customers.find(
				(customer) => customer.id === user.id
			)

			expect(hasUserAsCustomer).toBeTruthy()
		})

		// TODO Fix
		test('personalTrainerData.reviews should return the list of reviews', async () => {
			const personalTrainer = await getUser({
				email: mockUsers.personalTrainer.email,
			})
			const user = await getUser({ email: mockUsers.customer.email })

			const allReviews = await Review.find({}, {})

			console.log('personal trainer fetched', { personalTrainer, allReviews })

			const reviews = personalTrainer.personalTrainerData?.reviews
		})

		test('files should return the list of shared files', async () => {
			const personalTrainer = await getUser({
				email: mockUsers.personalTrainer.email,
			})
			const user = await getUser({ email: mockUsers.customer.email })

			const userFiles = user.files
			const ptFiles = personalTrainer.files
			// TODO: get file from db and check that id corresponds

			expect(userFiles.length).toBe(1)
			expect(ptFiles.length).toBe(1)
		})
	})

	afterAll(async () => {
		await database.disconnectMongo()
	})
})
