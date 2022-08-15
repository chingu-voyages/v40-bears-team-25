import {
	Container,
	TextField,
	Select,
	styled,
	FormControl,
	Button,
	Box,
	Grid,
} from '@mui/material'

export const PageContainer = styled(Container, {
	name: 'PageContainer',
	slot: 'container',
})`
	height: 100%;
	width: 90%;

	div {
		margin-top: 7px;
	}

	fieldset {
		border-radius: 15px;
	}
`

export const SelectGroup = styled(FormControl, {
	name: 'SelectGroup',
	slot: 'div',
})`
	flex-grow: 1;
`

export const SelectTextField = styled(TextField, {
	name: 'SelectTextField',
	slot: 'mui-txtFld',
})`
	width: 60%;
	margin-right: 1em;
`

export const CustomSelect = styled(Select)`
	height: 56px;
`
export const FormButton = styled(Button)`
	margin: 2em 0 1em 0;
	width: 100%;
	padding: 1.4em;
	background-color: ${(props) => props.theme.custom.blue};
	border-radius: 15px;
`
export const LookingForDropdown = styled(FormControl)`
	width: 100%;
`
export const AvatarEditContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`
export const AvaEditBtn = styled(Button)`
	padding: 10px;
	background-color: ${(props) => props.theme.custom.blue};
`

export const TitleMenuContainer = styled(Box)`
	display: flex;
	justify-content: space-between;
	h4 {
		font-family: 'Heebo';
		text-align: center;
		display: inline-block;
	}
`
export const WeightGrid = styled(Grid)`
	${(props) => props.theme.breakpoints.up('md')} {
		margin-right: 5.5em;
	}
`
