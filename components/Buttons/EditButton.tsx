import { Edit } from '@mui/icons-material'
import { SxProps, Theme } from '@mui/material'
import React from 'react'
import { EditButtonContainer } from './Buttons'

interface SignOutProps {
	sx?: SxProps<Theme> | undefined
	children: React.ReactNode
}

const EditBtn = ({ sx, children }: SignOutProps) => (
	<EditButtonContainer sx={sx}>
		<Edit sx={{ marginRight: '10px' }} />
		{children}
	</EditButtonContainer>
)

EditBtn.defaultProps = {
	sx: {},
}

export default EditBtn
