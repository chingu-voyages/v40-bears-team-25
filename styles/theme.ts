import { createTheme } from '@mui/material'

declare module '@mui/material/styles' {
	interface Theme {
		custom: {
			bkgHeroPurple: React.CSSProperties['color']
			litePurple: React.CSSProperties['color']
			litePink: React.CSSProperties['color']
			liteYellow: React.CSSProperties['color']
			liteOrange: React.CSSProperties['color']
			liteBlue: React.CSSProperties['color']
			purple: React.CSSProperties['color']
			pink: React.CSSProperties['color']
			yellow: React.CSSProperties['color']
			orange: React.CSSProperties['color']
			blue: React.CSSProperties['color']
			gray: React.CSSProperties['color']
			offlineRed: React.CSSProperties['color']
			green: React.CSSProperties['color']
		}
	}

	interface ThemeOptions {
		custom: {
			bkgHeroPurple: React.CSSProperties['color']
			litePurple: React.CSSProperties['color']
			litePink: React.CSSProperties['color']
			liteYellow: React.CSSProperties['color']
			liteOrange: React.CSSProperties['color']
			liteBlue: React.CSSProperties['color']
			purple: React.CSSProperties['color']
			pink: React.CSSProperties['color']
			yellow: React.CSSProperties['color']
			orange: React.CSSProperties['color']
			blue: React.CSSProperties['color']
			gray: React.CSSProperties['color']
			offlineRed: React.CSSProperties['color']
			green: React.CSSProperties['color']
		}
	}
}
const theme = createTheme({
	typography: {
		fontFamily: ['Poppins', 'Hebbo', 'sans-serif', 'cursive'].join(','),
	},
	custom: {
		bkgHeroPurple: '#7a38ff',
		litePurple: '#eceaff',
		litePink: '#ffb5c6',
		liteYellow: '#fff0cc',
		liteOrange: '#fff0e4',
		liteBlue: '#e5f7ff',
		purple: '#fd1b4f',
		pink: '#fd1b4f',
		yellow: '#face65',
		orange: '#ff6902',
		blue: '#00a3ef',
		gray: '#f5f5f7',
		offlineRed: '#f02020',
		green: '#6dd22e',
	},
})

export default theme
