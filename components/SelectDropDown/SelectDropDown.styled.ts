import { styled, TextField } from '@mui/material'

const SelectGroup = styled(TextField, {
	name: 'SelectGroup',
	slot: 'div',
})`
	flex-grow: 1;

	.MuiInputBase-formControl {
		height: 56px;
	}
`
export default SelectGroup
