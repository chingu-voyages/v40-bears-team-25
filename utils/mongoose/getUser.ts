import User from '../../models/userModel'

type QueryParams = {
	[key: string]: string
}

const defaultFieldsToPopulate = [
	'personalTrainerData.customers',
	'personalTrainerData.reviews',
	'files',
]

const getUser = async (
	queryParams: QueryParams = {},
	fieldsToPopulate: string[] = defaultFieldsToPopulate
) => {
	const user = await User.findOne(queryParams, {}).populate(
		fieldsToPopulate.join(' ')
	)

	if (!user) {
		throw new Error('user not found')
	}

	return user
}

export default getUser
