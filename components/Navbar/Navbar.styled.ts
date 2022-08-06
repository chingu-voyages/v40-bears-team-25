import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	display: flex;
	justify-content: space-between;
	position: fixed;
	z-index: 7;
	height: 5em;
	width: 100%;
	margin: auto;
	background-color: ${({ theme }) => theme.color.dBlue};
`
