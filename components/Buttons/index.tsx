import { ButtonProps } from '@mui/material'
import React, { FC } from 'react'
import CustomButton from './Button.styled'

interface StyledBtnProps extends ButtonProps {
	edit?: boolean
	submit?: boolean
}

const StyldButton: FC<StyledBtnProps> = ({ ...props }) => {
	// eslint-disable-next-line no-lone-blocks
	{
		/* 
	const theme = useTheme()
	const bkgrdColor = props.edit
		? 'gray'
		: props.submit
		? theme.custom.pink
		: theme.custom.blue

	const hoverLogic = props.edit
		? 'black'
		: props.submit
		? 'red'
: theme.palette.primary.dark */
	}

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<CustomButton {...props}>{props.children}</CustomButton>
	)
}

StyldButton.defaultProps = {
	edit: false,
	submit: false,
}

export default StyldButton
