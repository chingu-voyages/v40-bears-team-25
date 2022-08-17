import { Box, Grid } from '@mui/material'
import React from 'react'
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import validationSchema from '@/utils/helper'

import Input from '@/components/Input'
import { PrimaryBtn } from '../Buttons/Buttons'

const SignIn: React.FC = () => {
	const initialState = { email: '', password: '' }
	const { password, email } = validationSchema

	const handleSubmit = async (values: typeof initialState) => {
		console.log(values)
	}

	return (
		<Box style={{ marginTop: '5em' }}>
			<Formik
				initialValues={initialState}
				validationSchema={yup.object({
					email,
					password,
				})}
				onSubmit={handleSubmit}
			>
				<Form>
					<Grid container spacing={2}>
						<Input name="email" label="Email" type="text" half={false} />
						<Input
							name="password"
							label="Password"
							type="password"
							half={false}
						/>

						<Grid item xs={12}>
							<PrimaryBtn
								color="primary"
								variant="contained"
								fullWidth
								type="submit"
								style={{ marginTop: '10px' }}
							>
								Sign In
							</PrimaryBtn>
						</Grid>
					</Grid>
				</Form>
			</Formik>
		</Box>
	)
}

export default SignIn
