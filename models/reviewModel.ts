import { Schema, model, models, Document, Model } from 'mongoose'

// Extends document is used to make methods like .save() available when creating a new User
interface IReview extends Document {
	reviewer: Schema.Types.ObjectId
	reviewee: Schema.Types.ObjectId
	reviewText?: string
	rating: number
}

const reviewSchema = new Schema({
	reviewer: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	reviewee: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: 'User',
	},
	reviewText: String,
	rating: {
		type: Number,
		enum: [0, 1, 2, 3, 4, 5],
		required: true,
	},
})

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/**
 * Edits the document returned from the Database by removing the passwordHash, _id, __v
 * and creating a id property
 */
reviewSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()

		delete returnedObject.passwordHash
		delete returnedObject._id
		delete returnedObject.__v
	},
})

const Review =
	(models.Review as Model<IReview>) || model<IReview>('Review', reviewSchema)

// (source: https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb)
// IMPORTANT: Notice how we use models.Test and then the logical OR operator
// and then use the model function by mongoose.

// We do that because we don't want to create a new model
// every single time we hit an API route in Next.js.
// If you don't do that and just go with model('Test', testSchema),
// you might face an error that would prevent creating/updating etc.

export default Review
