import { SxProps, Theme } from '@mui/material'
<<<<<<< HEAD
import { useField } from 'formik'
=======
>>>>>>> 0e95c16 (feature: add reusable components)
import React from 'react'
import SelectGroup from './SelectDropDown.styled'

interface SelectDropdownProps {
	children: React.ReactNode
	label: string
	sx?: SxProps<Theme> | undefined
<<<<<<< HEAD
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
=======
	value: string | number
	name: string
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const SelectDropdown = ({
	children,
	label,
	sx,
	onChange,
	name,
	value,
}: SelectDropdownProps) => (
	<SelectGroup
		name={name}
		sx={sx}
		select
		id={label.split(' ').join('_')}
		value={value}
		onChange={onChange}
		label={label}
	>
		{children}
	</SelectGroup>
)
>>>>>>> 0e95c16 (feature: add reusable components)

SelectDropdown.defaultProps = {
	sx: {},
}

export default SelectDropdown
