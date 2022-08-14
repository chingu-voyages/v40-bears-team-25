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

	if (!process.env.MONGO_URI) {
		throw new Error(
			'Unable to find your MongoDB URI - Have you created a .env file with an ENV VAR named "MONGO_URI"?'
		)
	}

	return process.env.MONGO_URI
}

let cached = global.mongoose

if (!cached) {
	global.mongoose = { conn: null, promise: null }
	cached = global.mongoose
}

/**
 * Connects to MongoDB through Mongoose
 * - If connection has been already established, it doesn't create a new connection
 * - If the connection is successful, it returns 0
 * - If there is any error, it returns the error
 */
const connectMongo = async () => {
	console.log('Connecting to Mongo...')
	const MONGO_URI = await getMongoUri()

	try {
		if (!cached.promise) {
			const opts = {
				bufferCommands: false,
			}

			console.log('Connection not existing yet. About to initialize connection')

			cached.promise = mongoose.connect(MONGO_URI, opts)
		}

		cached.conn = await cached.promise

		console.log('...Connected!')
		return 0 // cached.conn
	} catch (error) {
		console.error('... An Error Occured!')
		console.error(error)

		return error
	}
}

/**
 * Async function that disconnects from MongoDB and returns a message when done
 */
const disconnectMongo = async () => {
	console.log('Disconnecting from MongoDB...')
	await mongoose.disconnect()
	console.log('...Disconnected!')
}

export default { connectMongo, disconnectMongo }
