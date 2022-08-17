import { SxProps, Theme } from '@mui/material'
import React from 'react'
import { SectionTitle, SectionContainer } from './Section.styled'

interface PgSectionProps {
	children: React.ReactNode
	sectionTitle?: string
	sx?: SxProps<Theme> | undefined
}

const PageSection = ({ children, sectionTitle, sx }: PgSectionProps) => (
	<SectionContainer sx={sx}>
		<SectionTitle variant="h3">{sectionTitle}</SectionTitle>
		{children}
	</SectionContainer>
)

PageSection.defaultProps = {
	sectionTitle: '',
	sx: {},
}

export default PageSection
