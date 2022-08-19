/* eslint-disable no-underscore-dangle */
import { Schema } from 'mongoose'
import { database } from '../../lib'
import { User, File, Review } from '../../models'
import mockFile from './mockFile'
import mockReview from './mockReview'
import mockUsers from './mockUsers'

const resetDatabase = async () => {
	const promiseArr = [
		User.deleteMany({}),
		File.deleteMany({}),
		Review.deleteMany({}),
	]

	await Promise.all(promiseArr)
}

/**
 * Initializes DB with a customer and a personal trainer
 */
const initializeDatabase = async () => {
	console.log('initializing database...')

	await database.connectMongo()

	// Delete all Users in the Database
	await resetDatabase()

	let personalTrainer = new User(mockUsers.personalTrainer)
	let customer = new User(mockUsers.customer)
	let file = new File(mockFile)

	personalTrainer = await personalTrainer.save()
	customer = await customer.save()
	let review = new Review({
		...mockReview,
		reviewer: customer._id,
		reviewee: personalTrainer._id,
	})

	file.users.push(
		personalTrainer._id as Schema.Types.ObjectId,
		customer._id as Schema.Types.ObjectId
	)

	file = await file.save()
	review = await review.save()

	// Personal trainer gets assigned to customer
	customer.customerData.personalTrainer =
		personalTrainer._id as Schema.Types.ObjectId
	customer = await customer.save()

	console.log('...database initialized!')
	return { customer, personalTrainer, file, review }
}

export default initializeDatabase
