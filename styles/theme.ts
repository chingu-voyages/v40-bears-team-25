export interface CoachMeTheme {
	color: {
		bkgHeroPurple: '#7a38ff'
		litePurple: '#eceaff'
		litePink: '#ffb5c6'
		liteYellow: '#fff0cc'
		liteOrange: '#fff0e4'
		liteBlue: '#ff6902'
		purple: '#fd1b4f'
		pink: '#fd1b4f'
		yellow: '#face65'
		orange: '#ff6902'
		blue: '#00a3ef'
		gray: '#f5f5f7'
		offlineRed: '#f02020'
		green: '#6dd22e'
	}
	fonts: string[]
	fontSize: {
		small: string
		medium: string
		large: string
	}
}

export const theme: CoachMeTheme = {
	color: {
		bkgHeroPurple: '#7a38ff',
		litePurple: '#eceaff',
		litePink: '#ffb5c6',
		liteYellow: '#fff0cc',
		liteOrange: '#fff0e4',
		liteBlue: '#ff6902',
		purple: '#fd1b4f',
		pink: '#fd1b4f',
		yellow: '#face65',
		orange: '#ff6902',
		blue: '#00a3ef',
		gray: '#f5f5f7',
		offlineRed: '#f02020',
		green: '#6dd22e',
	},
	fonts: ['Poppins', 'Heebo', 'sans-serif', 'cursive'],
	fontSize: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
}
