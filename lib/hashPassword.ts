import bcrypt from 'bcrypt'

const hashPassword = async (password: string) => {
	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	return passwordHash
}

export default hashPassword
