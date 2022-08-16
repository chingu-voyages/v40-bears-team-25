import { Typography, styled, Box } from '@mui/material'

export const Namebox = styled(Box)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`
export const HandleUsername = styled(Typography)`
	font-weight: 200;
	font-style: italic;
`
export const FirstName = styled(Typography)`
	font-family: 'Heebo';
	font-weight: 600;
	${(props) => props.theme.breakpoints.down('sm')} {
		font-size: 2.3em;
	}
`
