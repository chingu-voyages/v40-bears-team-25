import { SxProps, Theme } from '@mui/material'
import React from 'react'
import SelectGroup from './SelectDropDown.styled'

interface SelectDropdownProps {
	children: React.ReactNode
	label: string
	sx?: SxProps<Theme> | undefined
	value: string | number
	name: string
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

SelectDropdown.defaultProps = {
	sx: {},
}

export default SelectDropdown
