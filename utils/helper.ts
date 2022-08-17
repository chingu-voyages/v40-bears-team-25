import * as yup from 'yup'

import { passwordRegex } from './constants'

export const validationSchema = {
	firstname: yup.string().required('First Name is required'),
	lastname: yup.string().required('First Name is required'),
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

export const editProfileValidationSchema = {
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
	wt: yup
		.number()
		.integer('Enter a whole number')
		.required('Please Enter Weight')
		.min(27, 'Minimum weight is 27kg/60lbs')
		.max(700, 'Are you serious?, you are more than a half a ton?🙃'),
	ht: yup
		.number()
		.required('Please Enter Height')
		.max(213, 'Are you serious?, you are that tall?🙃')
		.min(92, 'Must be taller than 92cm/3ft'),
}
