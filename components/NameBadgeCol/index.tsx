import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Namebox, HandleUsername } from './NameBadgeCol.styled'

interface NameBadgeColInterface {
	name: string
	surname: string
	handleName?: string
}

const NameBadgeCol = ({ name, surname, handleName }: NameBadgeColInterface) => (
	<Box>
		<Typography variant="h2" sx={{ fontFamily: 'Heebo', fontWeight: 600 }}>
			{name}
		</Typography>
		<Namebox>
			<Typography variant="h4" sx={{ fontWeight: 200, fontFamily: 'Heebo' }}>
				{surname}
			</Typography>
			{handleName !== '' && <HandleUsername>{handleName}</HandleUsername>}
		</Namebox>
	</Box>
)

NameBadgeCol.defaultProps = {
	handleName: '',
}

export default NameBadgeCol
