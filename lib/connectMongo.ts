/* eslint-disable no-console */
import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const getMongoUri = async () => {
	if (process.env.NODE_ENV === 'test') {
		const mongoMemoryServer = await MongoMemoryServer.create()

		return mongoMemoryServer.getUri()
	}
	return process.env.MONGO_URI
}

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

		if (error instanceof Error) {
			return error
		}
		return error
	}
}

export default connectMongo
