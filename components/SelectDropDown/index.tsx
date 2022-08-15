import { InputLabel } from '@mui/material'
import React from 'react'
import { CustomSelect, SelectGroup } from './SelectDropDown.styled'

interface SelectDropdownProps {
	children: React.ReactNode
	label: string
	sx?: Record<string, unknown>
}

const SelectDropdown = ({ children, label, sx }: SelectDropdownProps) => (
	<SelectGroup sx={sx}>
		<InputLabel>{label}</InputLabel>
		<CustomSelect>{children}</CustomSelect>
	</SelectGroup>
)

SelectDropdown.defaultProps = {
	sx: {},
}

export default SelectDropdown
