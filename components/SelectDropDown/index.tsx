import { SxProps, Theme } from '@mui/material'
import { useField } from 'formik'
import React from 'react'
import SelectGroup from './SelectDropDown.styled'

interface SelectDropdownProps {
	children: React.ReactNode
	label: string
	sx?: SxProps<Theme> | undefined
	name: string
}

const SelectDropdown = ({ ...props }: SelectDropdownProps) => {
	const [field, meta] = useField(props.name)
	const isError = Boolean(meta.error && meta.touched)

	return (
		<SelectGroup
			name={props.name}
			sx={props.sx}
			select
			id={props.label.split(' ').join('_')}
			onBlur={field.onBlur}
			onChange={field.onChange}
			error={isError}
			helperText={isError && meta.error}
			label={props.label}
			required
		>
			{props.children}
		</SelectGroup>
	)
}

SelectDropdown.defaultProps = {
	sx: {},
}

export default SelectDropdown
