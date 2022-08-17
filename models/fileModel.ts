import { Schema, model, models, Document, Model } from 'mongoose'

// Extends document is used to make methods like .save() available when creating a new User
interface IFile extends Document {
	url: string
	users: Schema.Types.ObjectId
}

const fileSchema = new Schema({
	url: {
		type: String,
		required: true,
	},
	users: [{ type: Schema.Types.ObjectId, ref: 'User' }],
})

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/**
 * Edits the document returned from the Database by removing the passwordHash, _id, __v
 * and creating a id property
 */
fileSchema.set('toJSON', {
	transform: (document, returnedObject) => {
		returnedObject.id = returnedObject._id.toString()

		delete returnedObject.passwordHash
		delete returnedObject._id
		delete returnedObject.__v
	},
})

const File = (models.File as Model<IFile>) || model<IFile>('File', fileSchema)

// (source: https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb)
// IMPORTANT: Notice how we use models.Test and then the logical OR operator
// and then use the model function by mongoose.

// We do that because we don't want to create a new model
// every single time we hit an API route in Next.js.
// If you don't do that and just go with model('Test', testSchema),
// you might face an error that would prevent creating/updating etc.

export default File
