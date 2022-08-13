import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

const Navbar = () => {
	const theme = useTheme()

	return (
		<Box>
			<AppBar sx={{ padding: 2, backgroundColor: theme.custom.blue }}>
				NavBar in Materia UI
			</AppBar>
		</Box>
	)
}

export default Navbar
