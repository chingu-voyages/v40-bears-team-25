import { FormControl, Select, styled } from '@mui/material'

export const SelectGroup = styled(FormControl, {
	name: 'SelectGroup',
	slot: 'div',
})`
	flex-grow: 1;
`

export const CustomSelect = styled(Select)`
	height: 56px;
`
