/* eslint-disable react/jsx-props-no-spreading */
import { ButtonProps } from '@mui/material'
import React, { FC } from 'react'
import CustomButton, { EditButton, SignOutButton } from './Button.styled'

interface StyledBtnProps extends ButtonProps {
	btnType?: 'edit' | 'signout' | 'default'
	children: React.ReactNode
}

const StyledButton: FC<StyledBtnProps> = ({ btnType, children, ...props }) => {
	switch (btnType) {
		case 'edit':
			return <EditButton {...props}>{children}</EditButton>
		case 'signout':
			return <SignOutButton {...props}>{children}</SignOutButton>
		case 'default':
			return <CustomButton {...props}>{children}</CustomButton>
		default:
			return <CustomButton {...props}>{children}</CustomButton>
	}
}

StyledButton.defaultProps = {
	btnType: 'default',
}

export default StyledButton
