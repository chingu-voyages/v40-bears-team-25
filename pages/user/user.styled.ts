import { Container, TextField, styled, Button, Box } from '@mui/material'

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

export const SelectTextField = styled(TextField, {
	name: 'SelectTextField',
	slot: 'mui-txtFld',
})`
	width: 60%;
	margin-right: 1em;
`

export const FormButton = styled(Button)`
	margin: 2em 0 1em 0;
	width: 100%;
	padding: 1.4em;
	background-color: ${(props) => props.theme.custom.blue};
	border-radius: 15px;
`

export const AvaEditBtn = styled(Button)`
	padding: 10px;
	background-color: ${(props) => props.theme.custom.blue};
`
export const ChipBox = styled(Box)`
	div:not(:last-child) {
		margin-right: 10px;
	}

	div:nth-child(1n) {
		background-color: ${(props) => props.theme.custom.liteYellow};
		color: ${(props) => props.theme.custom.yellow};
	}

	div:nth-child(2n) {
		background-color: ${(props) => props.theme.custom.litePurple};
		color: #7a38ff;
	}

	div:nth-child(3n) {
		background-color: ${(props) => props.theme.custom.liteBlue};
		color: ${(props) => props.theme.custom.blue};
	}
`
