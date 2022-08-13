import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const connectMongo = async () => {
	console.log('Connecting to Mongo...')
	let MONGO_URI: string | undefined

	if (process.env.NODE_ENV === 'test') {
		const mongoMemoryServer = await MongoMemoryServer.create()

		MONGO_URI = mongoMemoryServer.getUri()
	} else {
		MONGO_URI = process.env.MONGO_URI
	}

	if (!MONGO_URI) {
		console.error(
			'Unable to find your MongoDB URI - Have you created a .env file with an ENV VAR named "MONGO_URI"?'
		)

		return false
	}
	await mongoose.connect(mongoUri)

	console.log('Connected to MongoDB!')

	return true
}

export default connectMongo
