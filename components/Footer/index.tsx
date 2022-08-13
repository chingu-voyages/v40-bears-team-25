import React from 'react'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'

const Footer = () => {
	const theme = useTheme()

	return (
		<Box sx={{ padding: 2, backgroundColor: theme.custom.liteBlue }}>
			Footer
		</Box>
	)
}

export default Footer
