/// <reference types="cypress" />

const SITE_URL = 'http://localhost:3000/'
const SIGN_IN_PAGE = `${SITE_URL}api/auth/signin`

const testUser = {
	email: 'mike.ross@pearsonspecter.com',
	password: 'testpassword',
}

describe('SignIn', () => {
	it('Logs in when the correct credentials are given', () => {
		cy.visit(SIGN_IN_PAGE)
		cy.get("[name='username'").type(testUser.email)
		cy.get("[name='password'").type(testUser.password)

		cy.get('form button').click()

		cy.url().should('equal', `${SITE_URL}`)
	})
})
