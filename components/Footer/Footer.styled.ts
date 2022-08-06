import styled from 'styled-components'

export const FooterDiv = styled.footer`
	position: sticky;
	top: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 5em;
	width: 100%;
	margin-top: 2em;
	background-color: ${({ theme }) => theme.color.dBlue};
`
