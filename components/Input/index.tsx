import React, { useState } from 'react'
import { useField } from 'formik'
import {
	Grid,
	IconButton,
	InputAdornment,
	FormControl,
	InputLabel,
	OutlinedInput,
	FormHelperText,
} from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import CheckIcon from '@mui/icons-material/Check'
import ClearIcon from '@mui/icons-material/Clear'
import { useTheme } from '@mui/material/styles'

export interface InputProps {
	name: string
	label: string
	half: boolean
	type: 'text' | 'password' | 'number'
	multiline?: boolean
	rows?: number
	fullWidth?: boolean
}

const Input: React.FC<InputProps> = ({ ...props }) => {
	const [field, meta] = useField(props)
	const theme = useTheme()

	const isError = Boolean(meta.error && meta.touched)
	const isSuccess = Boolean(!meta.error && field.value)

	const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false)

	const handleToggleShowPassword = () => {
		setToggleShowPassword((togglePassword) => !togglePassword)
	}

	const PasswordIcon = props.type === 'password' && (
		<IconButton
			aria-label="toggle password visibility"
			onClick={handleToggleShowPassword}
			edge="end"
		>
			{toggleShowPassword ? <VisibilityOff /> : <Visibility />}
		</IconButton>
	)

	const TextIcon = (isSuccess || isError) &&
		props.type !== 'password' &&
		props.type !== 'number' && (
			<IconButton aria-label="verify check" edge="end">
				{isError ? (
					<ClearIcon sx={{ color: theme.custom.offlineRed }} />
				) : (
					<CheckIcon sx={{ color: theme.custom.green }} />
				)}
			</IconButton>
		)

	const inputType =
		// eslint-disable-next-line no-nested-ternary
		props.type !== 'password'
			? props.type
			: toggleShowPassword
			? 'text'
			: 'password'

	return (
		<Grid item xs={12} sm={props.half ? 6 : 12}>
			<FormControl sx={{ width: '100%' }} variant="outlined" error={isError}>
				<InputLabel htmlFor={`outlined-adornment-${props.name}`}>
					{props.label}
				</InputLabel>
				<OutlinedInput
					// eslint-disable-next-line react/jsx-props-no-spreading
					{...props}
					id="outlined-adornment-password"
					name={props.name}
					type={inputType}
					onBlur={field.onBlur}
					onChange={field.onChange}
					endAdornment={
						<InputAdornment position="end">
							{PasswordIcon}
							{TextIcon}
						</InputAdornment>
					}
					label="Password"
				/>
				{isError && <FormHelperText>{meta.error}</FormHelperText>}
			</FormControl>
		</Grid>
	)
}

Input.defaultProps = {
	multiline: false,
	rows: 0,
	fullWidth: false,
}

export default Input
