import mongoose from 'mongoose'

/**
 * Async function that disconnects from MongoDB and returns a message when done
 */
const disconnectMongo = async () => {
	console.log('Disconnecting from MongoDB...')
	await mongoose.disconnect()
	console.log('...Disconnected!')
}

export default disconnectMongo
