import * as yup from 'yup'

import { passwordRegex } from './constants'

const validationSchema = {
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('First Name is required'),
	username: yup.string().required('User Name is required'),
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be 8 characters or more')
		.matches(passwordRegex, 'Password must contain a special character'),
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
