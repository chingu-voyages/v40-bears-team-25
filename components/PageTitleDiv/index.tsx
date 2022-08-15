import { IconButton, Typography } from '@mui/material'
import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import PageTitleContainer from './PageTitle.styled'

interface PageTitleDivProps {
	title: string
}

const PageTitleDiv = ({ title }: PageTitleDivProps) => (
	<PageTitleContainer>
		<IconButton>
			<ArrowBackIosNewIcon />
		</IconButton>
		<Typography variant="h4">{title}</Typography>
	</PageTitleContainer>
)

export default PageTitleDiv
