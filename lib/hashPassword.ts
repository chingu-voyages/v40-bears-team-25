import bcrypt from 'bcrypt'

/**
 * Function that hashes the password using BCrypt.
 * @param password
 * @returns The Hashed password
 */
const hashPassword = async (password: string) => {
	const saltRounds = 10
	const passwordHash = await bcrypt.hash(password, saltRounds)

	return passwordHash
}

export default hashPassword
