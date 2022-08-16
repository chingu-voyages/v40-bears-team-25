import { Button, styled } from '@mui/material'

export const EditButtonContainer = styled(Button)`
	width: 100%;
	padding: 1.4em;
	background-color: gray;
	color: white;
	border-radius: 15px;

	:hover {
		background-color: black;
	}
`

export const SignOutBtnContainer = styled(Button)`
	width: 100%;
	padding: 1.4em;
	background-color: ${(props) => props.theme.custom.pink};
	color: white;
	border-radius: 15px;

	:hover {
		background-color: red;
	}
`
