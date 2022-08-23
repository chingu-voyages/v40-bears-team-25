import React from 'react'
import { Grid, MenuItem } from '@mui/material'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import StyledButton from '@/components/Buttons'
import { useAppDispatch, useAppSelector } from '@/redux/app/hooks'
import useSWR, { mutate } from 'swr'
import { fetchUser } from '@/redux/features/auth'
import Router from 'next/router'
import { PageContainer, SelectTextField, AvaEditBtn } from './user.styled'
import Input from '../../components/Input'
import SelectDropdown from '../../components/SelectDropDown'
import PageTitleDiv from '../../components/PageTitleDiv'
import { wtUnits, htUnits, usrStatus } from '../../utils/constants'
import AvatarContainer from '../../components/AvatarContainer'
import { fetcher, validationSchema } from '../../utils/helper'

const Edit = () => {
	const dispatch = useAppDispatch()
	const user = useAppSelector((state) => state.auth.user)
	const url = `/api/user/${user?.userId}`
	const { data } = useSWR(url, fetcher)

	const editFormInitValues = {
		firstName: user?.firstName || '',
		lastName: user?.lastName || '',
		userName: user?.userName || '',
		email: user?.email || '',
		wt: user?.wt || '',
		wtUnit: user?.wtUnit || '',
		ht: user?.ht || '',
		htUnit: user?.htUnit || '',
		password: user?.password || '',
		bio: user?.bio || '',
		trainCategories: user?.trainingCategories || '',
		trainingStatus: user?.trainingStatus || '',
	}

	const {
		dynamic,
		email,
		password,
		confirmPassword,
		bio,
		trainingStatus,
		trainingCategories,
		wt,
		wtUnit,
		ht,
		htUnit,
	} = validationSchema

	const handleSubmit = async (values: typeof editFormInitValues) => {
		const patchUser = (obj: typeof editFormInitValues) =>
			fetch(url, {
				method: 'PATCH',
				body: JSON.stringify(obj),
			})
		const userData = { ...data, ...values }
		const options = { optimisticData: user, rollbackOnError: true }

		mutate(url, patchUser(userData), options).then((response) => {
			dispatch(fetchUser(response))
			Router.push('/')
		})
	}

	return (
		<PageContainer maxWidth="md">
			<PageTitleDiv title="Edit Profile" />
			<AvatarContainer avatarContent="V">
				<AvaEditBtn variant="contained">change photo</AvaEditBtn>
			</AvatarContainer>
			<Formik
				initialValues={editFormInitValues}
				validationSchema={yup.object({
					firstName: dynamic('First Name'),
					lastName: dynamic('Last Name'),
					userName: dynamic('User Name'),
					email,
					password,
					confirmPassword,
					bio,
					trainingStatus,
					trainingCategories,
					wt,
					wtUnit,
					ht,
					htUnit,
				})}
				onSubmit={handleSubmit}
			>
				<Form>
					<Input name="firstName" label="First Name" half={false} type="text" />
					<Input name="lastName" label="Last Name" half={false} type="text" />
					<Input name="userName" label="Username" half={false} type="text" />
					<Input name="email" label="Email" half={false} type="text" />
					<Grid columnSpacing={1} container>
						<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
							<SelectTextField
								name="wt"
								label="Enter Weight"
								half
								type="number"
							/>
							<SelectDropdown name="wtUnit" label="Weight Unit">
								{wtUnits.map((unit) => (
									<MenuItem value={unit} key={`editWtUnit_${unit}`}>
										{unit}
									</MenuItem>
								))}
							</SelectDropdown>
						</Grid>
						<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
							<SelectTextField
								name="ht"
								label="Enter Height"
								half
								type="number"
							/>
							<SelectDropdown name="htUnit" label="Height Unit">
								{htUnits.map((unit) => (
									<MenuItem value={unit} key={`editHtUnit_${unit}`}>
										{unit}
									</MenuItem>
								))}
							</SelectDropdown>
						</Grid>
					</Grid>
					<Input
						name="password"
						label="Password"
						type="password"
						half={false}
					/>
					<Input
						name="confirmPassword"
						label="Confirm Password"
						type="password"
						half={false}
					/>
					<Input
						name="bio"
						label="Bio"
						multiline
						half={false}
						rows={4}
						fullWidth
						type="text"
					/>
					<Input
						name="trainCategories"
						label="Looking for..."
						half={false}
						multiline
						rows={4}
						fullWidth
						type="text"
					/>
					<SelectDropdown
						name="trainingStatus"
						label="Training Status"
						sx={{ width: '100%', marginBottom: '2em' }}
					>
						{usrStatus.map((status) => (
							<MenuItem key={`editUsrStat_${status}`} value={status}>
								{status}
							</MenuItem>
						))}
					</SelectDropdown>
					<StyledButton
						btnType="default"
						type="submit"
						variant="contained"
						sx={{ marginBottom: '2em' }}
					>
						Save
					</StyledButton>
				</Form>
			</Formik>
		</PageContainer>
	)
}

export default Edit
