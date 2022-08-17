import {
	Schema,
	model,
	models,
	Document,
	Model,
	ToObjectOptions,
} from 'mongoose'

// Extends document is used to make methods like .save() available when creating a new User
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
		match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
	},
	passwordHash: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 15,
	},
	lastName: {
		type: String,
		required: true,
		minLength: 3,
		maxLength: 15,
	},
	// Profile -> bio, profileType, rating, personalTrainer, sharedfiles
})

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
type TransformFunc = ToObjectOptions['transform']
const transformFunction: TransformFunc = (document, returnedObject) => {
	returnedObject.id = returnedObject._id.toString()

	delete returnedObject.passwordHash
	delete returnedObject._id
	delete returnedObject.__v
}

/**
 * Edits the document returned from the Database by removing the passwordHash, _id, __v
 * and creating a id property
 */
userSchema.set('toJSON', {
	transform: transformFunction,
})

userSchema.set('toObject', {
	transform: transformFunction,
})

const User = (models.User as Model<IUser>) || model<IUser>('User', userSchema)

// (source: https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb)
// IMPORTANT: Notice how we use models.Test and then the logical OR operator
// and then use the model function by mongoose.

// We do that because we don't want to create a new model
// every single time we hit an API route in Next.js.
// If you don't do that and just go with model('Test', testSchema),
// you might face an error that would prevent creating/updating etc.

export default User
