/* eslint-disable no-var */
/* eslint-disable vars-on-top */

declare global {
	import mongooseInstance from 'mongoose'

	interface MongooseGlobalVar {
		conn: typeof mongooseInstance | null
		promise: Promise<typeof mongooseInstance> | null
	}

	/**
	 * `global.mongoose` is used to maintain only *ONE*
	 * active connection to mongoose at a time, by caching it in a global variable.
	 *
	 * This prevents connections from growing exponentially during API Routes usage
	 */
	var mongoose: MongooseGlobalVar
}

export {}
