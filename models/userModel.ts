import { Schema, model, models, Document, Model } from 'mongoose'

interface IUser extends Document {
	email: string
	passwordHash: string
	firstName: string
	lastName: string
}

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	// Profile -> bio, profileType, rating, personalTrainer, sharedfiles
})

const Test = (models.User as Model<IUser>) || model<IUser>('User', userSchema)

// (source: https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb)
// IMPORTANT: Notice how we use models.Test and then the logical OR operator
// and then use the model function by mongoose.

// We do that because we don't want to create a new model
// every single time we hit an API route in Next.js.
// If you don't do that and just go with model('Test', testSchema),
// you might face an error that would prevent creating/updating etc.

export default Test
