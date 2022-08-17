import * as yup from 'yup'

<<<<<<< HEAD
import { passwordRegex } from './constants'

export const validationSchema = {
	firstName: yup.string().required('First Name is required'),
	lastName: yup.string().required('First Name is required'),
	username: yup.string().required('User Name is required'),
=======
import { emailRegex } from './constants'

export const validationSchema = {
>>>>>>> 0465dd3114e1e54b52aebf25bca52b22c3ebd97a
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
<<<<<<< HEAD
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
=======
	firstName: yup
		.string()
		.required('First Name is required')
		.min(2, 'Min must be more than 1 character')
		.max(15, 'Max 15 characters or less'),
	surname: yup
		.string()
		.required('Surname is required')
		.min(2, 'Min must be more than 1 character')
		.max(15, 'Max 15 characters or less'),
	username: yup
		.string()
		.required('Username is required')
		.min(5, 'Min must be more than 5 character')
		.max(15, 'Max 15 characters or less'),
	email: yup
		.string()
		.email('Invalid email format')
		.matches(emailRegex, 'Invalid email format')
		.required('Email address is required'),
>>>>>>> 0465dd3114e1e54b52aebf25bca52b22c3ebd97a
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
<<<<<<< HEAD
=======
	password: yup
		.string()
		.required('Password is required')
		.min(8, 'Password must be 8 characters or more'),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref('password'), null], 'Passwords do not match'),
>>>>>>> 0465dd3114e1e54b52aebf25bca52b22c3ebd97a
}
