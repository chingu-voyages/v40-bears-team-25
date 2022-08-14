import { Error } from 'mongoose'

type FormattedValidationErrors = {
	[key: string]: Error.ValidationError['errors'][0]['message']
}

const handleError = (error: unknown) => {
	// Logic to handle Mongoose Validation Errors
	if (error instanceof Error.ValidationError) {
		const errors: FormattedValidationErrors = {}

		// Every invalid key is associated to its error message
		Object.keys(error.errors).forEach((key) => {
			errors[key] = error.errors[key].message
		})

		return errors
	}

	return error
}

export default handleError
