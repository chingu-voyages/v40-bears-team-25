import React, { useState } from 'react'
import {
	Avatar,
	Button,
	Grid,
	Paper,
	Typography,
	Container,
} from '@mui/material'

import SignIn from '@/components/SignIn'
import SignUp from '@/components/SignUp'
import { NextPage } from 'next'

const Auth: NextPage = () => {
	const [isSignedUp, setIsSignedUp] = useState(false)
	const switchMode = () => {
		setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp)
	}

	return (
		<Container maxWidth="sm" sx={{ marginTop: '5em' }}>
			<Paper elevation={6} sx={{ padding: 6 }}>
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
				{isSignedUp ? <SignUp /> : <SignIn />}
			</Paper>
		</Container>
	)
}

export default Auth
