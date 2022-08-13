import React from 'react'
import {
	Grid,
	IconButton,
	InputAdornment,
	SxProps,
	TextField,
	Theme,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

export interface InputProps {
	name: string
	label: string
	value?: string
	type?: string
	sx?: SxProps<Theme> | undefined
	disabled?: boolean
	handleShowPassword?: () => void
	half?: boolean
	autoFocus?: boolean
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
	name,
	label,
	half,
	autoFocus,
	type,
	handleShowPassword,
	value,
	sx,
	disabled,
	onChange,
}: InputProps) => (
	<Grid item xs={12} sm={half ? 6 : 12}>
		<TextField
			onChange={onChange}
			name={name}
			value={value}
			sx={sx}
			disabled={disabled}
			variant="outlined"
			fullWidth
			label={label}
			autoFocus={autoFocus}
			type={type}
			InputProps={
				name === 'password'
					? {
							endAdornment: (
								<InputAdornment position="end">
									<IconButton onClick={handleShowPassword}>
										{type === 'password' ? <Visibility /> : <VisibilityOff />}
									</IconButton>
								</InputAdornment>
							),
					  }
					: undefined
			}
		/>
	</Grid>
)

Input.defaultProps = {
	sx: {},
	disabled: false,
	handleShowPassword: () => {},
	half: false,
	autoFocus: false,
	type: 'text',
	value: '',
	onChange: () => {},
}

export default Input
