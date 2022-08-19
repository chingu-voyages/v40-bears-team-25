import { Button, styled } from '@mui/material'

const CustomButton = styled(Button)`
	padding: 0.8rem;
	background-color: blue;
	color: white;
	border-radius: 5px;
	width: 100%;
`

export const EditButton = styled(CustomButton)`
	background-color: gray;
	:hover {
		background-color: black;
	}
`

export const SignOutButton = styled(CustomButton)`
	background-color: red;
	:hover {
		background-color: pink;
	}
`
export default CustomButton
