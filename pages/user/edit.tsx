/* eslint-disable no-console */
/* eslint-disable spaced-comment */
import React from 'react'
import { Grid, MenuItem } from '@mui/material'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import StyldButton from '@/components/Buttons'
import { PageContainer, SelectTextField, AvaEditBtn } from './user.styled'
import Input from '../../components/Input'
import SelectDropdown from '../../components/SelectDropDown'
import PageTitleDiv from '../../components/PageTitleDiv'
import {
	wtUnits,
	htUnits,
	usrStatus,
	editFormInitValues,
} from '../../utils/constants'
import AvatarContainer from '../../components/AvatarContainer'
import validationSchema from '../../utils/helper'

const Edit = () => {
	const {
		firstName,
		lastName,
		username,
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
	const handleSubmit = (values: typeof editFormInitValues) => {
		//submit to api
		console.log(values)
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
					firstName,
					lastName,
					username,
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
					<Input name="username" label="Username" half={false} type="text" />
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
					<StyldButton
						type="submit"
						variant="contained"
						sx={{ marginBottom: '2em' }}
					>
						Save
					</StyldButton>
				</Form>
			</Formik>
		</PageContainer>
	)
}

export default Edit
