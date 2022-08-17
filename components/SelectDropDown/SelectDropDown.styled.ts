import { styled, TextField } from '@mui/material'

const SelectGroup = styled(TextField, {
	name: 'SelectGroup',
	slot: 'div',
})`
	position: relative;
	top: 7px;
	flex-grow: 1;

	.MuiInputBase-formControl {
		height: 56px;
	}
`
export default SelectGroup
