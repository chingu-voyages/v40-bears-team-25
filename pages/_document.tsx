import React from 'react'
import Document, {
	DocumentContext,
	DocumentInitialProps,
	Head,
	Html,
	Main,
	NextScript,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { AppPropsType, AppType } from 'next/dist/shared/lib/utils'
import { NextRouter } from 'next/router'

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>{/* CDNs & StyleSheets goes here */}</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
	static async getInitialProps(
		ctx: DocumentContext
	): Promise<DocumentInitialProps> {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.renderPage

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App: AppType) => (props: AppPropsType<NextRouter, {}>) =>
						sheet.collectStyles(<App {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: [
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>,
				],
			}
		} finally {
			sheet.seal()
		}
	}
}
