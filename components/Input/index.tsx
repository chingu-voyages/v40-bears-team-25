import React from 'react'
import {
	Grid,
	IconButton,
	InputAdornment,
	styled,
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
	helperText?: React.ReactNode | string
	error?: boolean | undefined
	onBlur?: (e: unknown) => void
}

export const StyledTxtField = styled(TextField)`
	fieldset {
		border-radius: 15px;
	}
`

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
	helperText,
	error,
	onBlur,
}: InputProps) => (
	<Grid item xs={12} sm={half ? 6 : 12}>
		<StyledTxtField
			onChange={onChange}
			name={name}
			value={value}
			sx={sx}
			disabled={disabled}
			variant="outlined"
			fullWidth
			label={label}
			helperText={helperText}
			error={error}
			onBlur={onBlur}
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
	error: false,
	helperText: '',
	onBlur: '',
}

export default Input
