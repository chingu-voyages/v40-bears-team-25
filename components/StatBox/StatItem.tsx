import { Typography } from '@mui/material'
import React from 'react'
import { StatItemContainer } from './StateBox.styled'

interface StatItemInterface {
	top: string
	center: string | number
	bottom: string
}

const StatItem = ({ top, center, bottom }: StatItemInterface) => (
	<StatItemContainer>
		<span className="top">
			<Typography>{top}</Typography>
		</span>
		<span className="cntr">
			<Typography variant="h5" sx={{ fontFamily: 'Heebo', fontWeight: 'bold' }}>
				{center}
			</Typography>
		</span>
		<span className="btm">
			<Typography>{bottom}</Typography>
		</span>
	</StatItemContainer>
)

export default StatItem
