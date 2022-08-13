import {
	Avatar,
	Button,
	Container,
	Grid,
	Paper,
	TextField,
	Typography,
} from '@mui/material'
import React, { useState } from 'react'
import Input from '../components/Input/Input'

const Auth = () => {
	const [isSignedUp, setIsSignedUp] = useState(false)
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
	const switchMode = () => {
		setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp)
		setShowPassword(false)
	}

	const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		if (!isSignedUp) {
			// eslint-disable-next-line no-lone-blocks
			{
				/* SIGN USER IN (/auth/login)=> sends only email && password */
			}
			console.log('formData sends BE post request to LOGIN API: ', formData)
		} else {
			// eslint-disable-next-line no-lone-blocks
			{
				/* REGISTER NEW USER (/auth/register) => sends all data */
			}
			console.log(
				'formData sends BE post request to REGISTRATION API: ',
				formData
			)
		}
	}

	return (
		<Container style={{ marginTop: '5em' }}>
			<Paper elevation={6}>
				<Grid container justifyContent="flex-end">
					<Grid item>
						<Button onClick={switchMode}>
							{isSignedUp
								? 'Already a user? Sign In'
								: "Dont't have an account? Register"}
						</Button>
					</Grid>
				</Grid>
				<Avatar>Logo goes here</Avatar>
				<Typography component="h1" variant="h5">
					{isSignedUp ? 'Register' : 'Sign In'}
				</Typography>
				<form onSubmit={onSubmit}>
					<Grid container spacing={2}>
						{isSignedUp && (
							<>
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
							</>
						)}
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
						{isSignedUp && (
							<Input
								name="confirmPassword"
								label="Repeat Password"
								type="password"
								value={formData.confirmPassword}
								onChange={handleOnChange}
							/>
						)}
					</Grid>
					<Button
						color="primary"
						variant="contained"
						fullWidth
						type="submit"
						style={{ marginTop: '10px' }}
					>
						{isSignedUp ? 'Register' : 'Sign In'}
					</Button>
				</form>
			</Paper>
		</Container>
	)
}

export default Auth
