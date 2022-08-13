/* eslint-disable no-console */
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

/**
 * Function to get the *MongoDB URI* to provide to mongoose.connect
 * - If node is running in a `test` environment, the function spins up a mock server using MongoMemoryServer
 * - If node is running in `production` or `development`, the function uses the Environment Variable
 */
const getMongoUri = async () => {
	if (process.env.NODE_ENV === 'test') {
		const mongoMemoryServer = await MongoMemoryServer.create()

		return mongoMemoryServer.getUri()
	}
	return process.env.MONGO_URI
}

/**
 * Connects to MongoDB through Mongoose
 * - If the connection is successful, it returns 0
 * - If there is any error, it returns the error
 */
const connectMongo = async () => {
	console.log('Connecting to Mongo...')
	const MONGO_URI = await getMongoUri()

	if (!MONGO_URI) {
		console.error(
			'Unable to find your MongoDB URI - Have you created a .env file with an ENV VAR named "MONGO_URI"?'
		)
		console.error('...Could not connect to MongoDB!')

		return false
	}

	try {
		await mongoose.connect(MONGO_URI)
		console.log('...Connected to MongoDB!')

		return 0
	} catch (error) {
		console.log(error, typeof error)

		return error
	}
}

export default connectMongo
