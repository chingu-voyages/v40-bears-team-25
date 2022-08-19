import {
	Schema,
	model,
	models,
	Document,
	Model,
	ToObjectOptions,
} from 'mongoose'

const UNIT_SYSTEMS = ['metric', 'imperial']
const TRAINING_GOALS = ['mass']
// Extends document is used to make methods like .save() available when creating a new User

export interface UserAttrs {
	email: string
	passwordHash: string
	firstName: string
	lastName: string
	userType: 'personalTrainer' | 'customer'
	profile: {
		username?: string
		bio?: string
	}
	customerData: {
		trainingGoal?: any // CHANGE
		personalTrainer?: Schema.Types.ObjectId
		measurements: {
			height?: number
			weight?: number
			unit: 'metric' | 'imperial'
		}
	}
}

// Customers, files and reviews are virtual properties
// so they should not be entered by the user
interface IUser extends Document, UserAttrs {
	personalTrainerData?: {
		customers: IUser[]
		reviews: Schema.Types.ObjectId[]
		// getRating: () => number
	}
	files: Schema.Types.ObjectId[]
	id: string
}

// The Schema follows the Principle of Least Cardinality: if there is a one-to-many
// relationship, the reference is stored on the "many" side to avoid
// huge document sizes.
// Virtual populate are used to get the populated references on the "one" side.
// Fields that follow the Principle of Least Cardinality:
// - Personal Trainer -> Customers
// - User -> Shared Files
// - Personal Trainer -> Reviews
const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
		match: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
		lowercase: true,
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
	userType: {
		type: String,
		enum: ['personalTrainer', 'customer'],
		default: 'customer',
	},
	profile: {
		username: {
			type: String,
			min: 3,
			max: 15,
			unique: true,
		},
		bio: String,
	},
	customerData: {
		measurements: {
			weight: Number,
			height: Number,
			unit: {
				type: String,
				enum: UNIT_SYSTEMS,
				default: 'metric',
			},
		},
		// Principle of Least Cardinality
		personalTrainer: {
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
		trainingGoal: {
			type: String,
			enum: TRAINING_GOALS,
		},
	},

	// personalTrainerData: {
	// },
})

userSchema.virtual('personalTrainerData.customers', {
	ref: 'User',
	localField: '_id',
	foreignField: 'customerData.personalTrainer',
})

userSchema.virtual('personalTrainerData.reviews', {
	ref: 'User',
	localField: '_id',
	foreignField: 'reviewee',
})

userSchema.virtual('files', {
	ref: 'File',
	localField: '_id',
	foreignField: 'users', // HOW TO DO .INCLUDE?
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
	getters: true,
})

userSchema.set('toObject', {
	transform: transformFunction,
	getters: true,
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
