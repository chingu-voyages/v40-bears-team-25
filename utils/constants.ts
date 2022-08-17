// eslint-disable-next-line no-useless-escape
export const emailRegex = /^([a-z\d\.-_]+)+@(email\.com)$/
export const passwordRegex = /[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>?~]/
export const wtUnits = ['kg', 'lb']
export const htUnits = ['cm', 'in']
export const usrStatus = ['looking', 'inactive', 'active']

export const editFormInitValues = {
	firstName: '',
	lastName: '',
	username: '',
	email: '',
	wt: '',
	wtUnit: '',
	ht: '',
	htUnit: '',
	password: '',
	confirmPassword: '',
	bio: '',
	trainCategories: '',
	trainingStatus: '',
}
