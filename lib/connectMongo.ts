import mongoose from 'mongoose'

const mongoUri = process.env.MONGO_URI

const connectMongo = async () => {
	if (!mongoUri) {
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
