import { ExitToApp } from '@mui/icons-material'
import { SxProps, Theme } from '@mui/material'
import React from 'react'
import { SignOutBtnContainer } from './Buttons'

interface SignOutProps {
	sx?: SxProps<Theme> | undefined
	children: React.ReactNode
}

const SignOutBtn = ({ sx, children }: SignOutProps) => (
	<SignOutBtnContainer sx={sx}>
		<ExitToApp sx={{ marginRight: '10px' }} />
		{children}
	</SignOutBtnContainer>
)

SignOutBtn.defaultProps = {
	sx: {},
}

export default SignOutBtn
