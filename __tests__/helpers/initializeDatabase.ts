import { database } from '../../lib'
import User from '../../models/userModel'
import mockUsers from './mockUsers'

/**
 * Initializes DB with a customer and a personal trainer
 */
const initializeDatabase = async () => {
	await database.connectMongo()
	let personalTrainer = new User(mockUsers.personalTrainer)
	let customer = new User(mockUsers.personalTrainer)

	personalTrainer = await personalTrainer.save()
	customer = await customer.save()

	// Personal trainer gets assigned to customer
	customer.customerData.personalTrainer = personalTrainer.id
	customer = await customer.save()

	return { customer, personalTrainer }
}

export default initializeDatabase
