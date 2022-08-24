import { Box, FormControl, FormLabel, Grid, RadioGroup } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { validationSchema } from '@/utils/helper'

import Input from '@/components/Input'
import StyldButton from '../Buttons'
import RadioButtonGroup from '../RadioBtnGroup'

const SignUp: React.FC = () => {
	const initialState = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		username: '',
		userType: '',
	}
	const { password, email, confirmPassword, dynamic, userType } =
		validationSchema

	const handleSubmit = async (values: typeof initialState) => {
		console.log(values)
	}

	return (
		<Box style={{ marginTop: '5em' }}>
			<Formik
				initialValues={initialState}
				validationSchema={yup.object({
					firstName: dynamic('First Name'),
					lastName: dynamic('Last Name'),
					username: dynamic('Username'),
					confirmPassword,
					email,
					password,
					userType,
				})}
				onSubmit={handleSubmit}
			>
				<Form>
					<FormControl component="fieldset" required>
						<FormLabel>I am a ...</FormLabel>
						<RadioGroup aria-label="userType" name="userType" row>
							<RadioButtonGroup name="userType" value="client" label="Client" />
							<RadioButtonGroup
								name="userType"
								value="trainer"
								label="Trainer"
							/>
						</RadioGroup>
					</FormControl>
					<Grid container spacing={2}>
						<Input
							name="firstName"
							label="First Name"
							type="text"
							half={false}
						/>
						<Input name="lastName" label="Last Name" type="text" half={false} />

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
							<StyldButton
								color="primary"
								variant="contained"
								fullWidth
								type="submit"
								style={{ marginTop: '10px' }}
							>
								Sign Up
							</StyldButton>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Box>
	)
}

export default SignUp
