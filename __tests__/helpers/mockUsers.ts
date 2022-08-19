export default {
	signup: {
		firstName: 'Mike',
		lastName: 'Ross',
		email: 'mike.ross@pearsonspecter.com',
		password: 'passwordTest',
	},
	customer: {
		firstName: 'Mike',
		lastName: 'Ross',
		email: 'mike.ross@pearsonspecter.com',
		passwordHash:
			'$2b$10$ASsqX9lDF5WjD8FRokPT2ufqUX16.pQR.XMrSZsvHhIUXLfN7mXfe', // testpassword
		profile: {
			bio: 'I am a fitness enthusiast!',
			username: 'mikeross',
		},
		customerData: {
			trainingGoal: 'mass',
			measurements: {
				weight: 70,
				height: 175,
				unit: 'metric',
			},
		},
	},
	personalTrainer: {
		firstName: 'Harvey',
		lastName: 'Specter',
		email: 'harvey.specter@pearsonspecter.com',
		passwordHash:
			'$2b$10$ASsqX9lDF5WjD8FRokPT2ufqUX16.pQR.XMrSZsvHhIUXLfN7mXfe', // testpassword
		userType: 'personalTrainer',
		profile: {
			bio: 'I am a fitness enthusiast as well!',
			username: 'harveyspecter',
		},
	},
}
