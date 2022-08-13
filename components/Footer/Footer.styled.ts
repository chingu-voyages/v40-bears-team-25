/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
// import Box from '@mui/material/Box'

export const FooterDiv = styled.div`
	position: sticky;
	top: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 5em;
	width: 100%;
	margin-top: 2em;
	background-color: ${({ theme }) => theme.color.liteBlue};
`
