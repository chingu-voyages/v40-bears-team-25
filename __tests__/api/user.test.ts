import { database } from '../../lib'
import initializeDatabase from '../helpers/initializeDatabase'

describe('/user', () => {
	let customer: any
	let personalTrainer: any

	beforeAll(async () => {
		const users = await initializeDatabase()
		customer = users.customer
		personalTrainer = users.personalTrainer
	})

	describe('editing a user goes smooth', () => {
		test('example test', async () => {
			console.log({ customer, personalTrainer })
		})
	})

	afterAll(async () => {
		await database.disconnectMongo()
	})
})
