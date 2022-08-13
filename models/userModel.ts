import { Schema, model, models } from 'mongoose'

const testSchema = new Schema({
	name: String,
	email: {
		type: String,
		required: true,
		unique: true,
	},
})

const Test = models.Test || model('Test', testSchema)

// (source: https://blog.usman-s.me/how-to-use-mongoose-with-nextjs-for-mongodb)
// IMPORTANT: Notice how we use models.Test and then the logical OR operator
// and then use the model function by mongoose.

// We do that because we don't want to create a new model
// every single time we hit an API route in Next.js.
// If you don't do that and just go with model('Test', testSchema),
// you might face an error that would prevent creating/updating etc.

export default Test
