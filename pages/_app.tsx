/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import React from 'react'
// import { ThemeProvider } from 'styled-components'
import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import theme from '../styles/theme'
import Layout from '../components/NxtComponents/Layout'
import { store } from '../redux/app/store'
import GlobalStyles from '../styles/globals'

const MyApp: any = ({ Component, pageProps }: AppProps) => (
	<>
		<GlobalStyles />
		<ThemeProvider theme={theme}>
			<Provider store={store}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</Provider>
		</ThemeProvider>
	</>
)

export default MyApp
