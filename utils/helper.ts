import * as yup from 'yup'

import emailRegex from './constants'

const validationSchema = {
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be 8 characters or more')
		.matches(emailRegex, 'Password must contain a special character'),
	dynamic: (title: string) => yup.string().required(`${title} is required`),
	email: yup
		.string()
		.email('Invalid email format')
		.required('Email address is required'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords do not match'),
}

export default validationSchema
