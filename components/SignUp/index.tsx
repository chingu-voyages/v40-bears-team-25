import { Button, Box, Grid } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import validationSchema from '@/utils/helper'

import Input from '@/components/Input'

const SignUp: React.FC = () => {
	const initialState = { email: '', password: '' }
	const { firstname, lastname, username, password, email, confirmPassword } =
		validationSchema

	const handleSubmit = async (values: typeof initialState) => {
		console.log(values)
	}

	return (
		<Box style={{ marginTop: '5em' }}>
			<Formik
				initialValues={initialState}
				validationSchema={yup.object({
					firstname,
					lastname,
					username,
					confirmPassword,
					email,
					password,
				})}
				onSubmit={handleSubmit}
			>
				<Form>
					<Grid container spacing={2}>
						<Input
							name="firstname"
							label="First Name"
							type="text"
							half={false}
						/>
						<Input name="lastname" label="Last Name" type="text" half={false} />

						<Input name="username" label="Username" type="text" half />

						<Input name="email" label="Email" type="text" half />
						<Input name="password" label="Password" type="password" half />
						<Input
							name="confirmPassword"
							label="Confirm Password"
							type="password"
							half
						/>

						<Grid item xs={12}>
							<Button
								color="primary"
								variant="contained"
								fullWidth
								type="submit"
								style={{ marginTop: '10px' }}
							>
								Sign Up
							</Button>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Box>
	)
}

export default SignUp