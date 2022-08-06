import type { AppProps } from 'next/app'
import React from 'react'
import GlobalStyles from '../styles/globals'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import Layout from '../components/NxtComponents/Layout'
import { Provider } from 'react-redux'
import { store } from '../redux/app/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <React.Fragment>
    <GlobalStyles />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </ThemeProvider>
  </React.Fragment>
  
  )
}

export default MyApp
