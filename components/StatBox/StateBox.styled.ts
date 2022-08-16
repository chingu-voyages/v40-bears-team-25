import { styled, Box } from '@mui/material'

export const StatGrid = styled(Box)`
	display: flex;
	justify-content: center;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		width: auto;
		height: 5em;
		padding-left: 1em;
		padding-right: 1em;
	}

	div:first-child {
		border-left: 1px solid gray;
		border-right: 1px solid gray;
	}

	div:not(:first-child) {
		border-right: 1px solid gray;
	}
`
export const StatItemContainer = styled(Box)`
	display: flex;
	flex-direction: column;

	.top,
	.cntr,
	.btm {
		display: block;
	}

	.cntr {
		margin-top: 5px;
		margin-bottom: 5px;
	}
`
