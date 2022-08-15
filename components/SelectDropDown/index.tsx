import { InputLabel } from '@mui/material'
import React from 'react'
import { CustomSelect, SelectGroup } from './SelectDropDown.styled'

interface SelectDropdownProps {
	children: React.ReactNode
	label: string
	sx?: Record<string, unknown>
	value: string
}

const SelectDropdown = ({
	children,
	label,
	sx,
	value,
}: SelectDropdownProps) => (
	<SelectGroup sx={sx}>
		<InputLabel>{label}</InputLabel>
		<CustomSelect value={value}>{children}</CustomSelect>
	</SelectGroup>
)

SelectDropdown.defaultProps = {
	sx: {},
}

export default SelectDropdown
