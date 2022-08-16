import { Button, Box, Grid, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import validationSchema from '@/utils/helper'
import Input from '@/components/Input'

const SignUp: React.FC = () => {
	const initialState = { email: '', username: '', password: '' }
	const { password, email, dynamic } = validationSchema

	const [showPassword, setShowPassword] = useState(false)
	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		email: '',
		password: '',
		confirmPassword: '',
	})

	const handleShowPassword = () => setShowPassword(!showPassword)

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const handleSubmit = async (values: typeof initialState) => {
		// const { username, password, email } = values

		console.log(values)
	}

	return (
		<Box style={{ marginTop: '5em' }}>
			<Formik
				initialValues={initialState}
				validationSchema={yup.object({
					password,
					email,
					username: dynamic('Username'),
				})}
				onSubmit={handleSubmit}
			>
				<Form>
					<Grid container spacing={2}>
						<Input
							name="first_name"
							label="First Name"
							autoFocus
							half
							value={formData.first_name}
							onChange={handleOnChange}
						/>
						<Input
							name="last_name"
							label="Last Name"
							half
							value={formData.last_name}
							onChange={handleOnChange}
						/>

						<Grid item xs={12} sm={12}>
							<TextField
								variant="outlined"
								name="email"
								value={formData.email}
								onChange={handleOnChange}
								fullWidth
								label="email"
								type="email"
							/>
						</Grid>
						<Input
							name="password"
							label="password"
							type={showPassword ? 'text' : 'password'}
							handleShowPassword={handleShowPassword}
							value={formData.password}
							onChange={handleOnChange}
						/>

						<Input
							name="confirmPassword"
							label="Repeat Password"
							type="password"
							value={formData.confirmPassword}
							onChange={handleOnChange}
						/>
					</Grid>
					<Button
						color="primary"
						variant="contained"
						fullWidth
						type="submit"
						style={{ marginTop: '10px' }}
					>
						Register
					</Button>
				</Form>
			</Formik>
		</Box>
	)
}

export default SignUp
