/* eslint-disable no-console */
/* eslint-disable spaced-comment */
import React from 'react'
import { Grid, MenuItem } from '@mui/material'
import { useFormik } from 'formik'
import * as yup from 'yup'
import {
	PageContainer,
	SelectTextField,
	FormButton,
	AvaEditBtn,
} from './user.styled'
import Input, { StyledTxtField } from '../../components/Input'
import SelectDropdown from '../../components/SelectDropDown'
import PageTitleDiv from '../../components/PageTitleDiv'
import {
	wtUnits,
	htUnits,
	usrStatus,
	editFormInitValues,
} from '../../utils/constants'
import AvatarContainer from '../../components/AvatarContainer'
import { editProfileValidationSchema } from '../../utils/helper'

const Edit = () => {
	const formik = useFormik({
		initialValues: editFormInitValues,
		validationSchema: yup.object(editProfileValidationSchema),
		onSubmit: (values) => {
			//submit to api
			console.log(values)
		},
	})
	return (
		<PageContainer maxWidth="md">
			<PageTitleDiv title="Edit Profile" />
			<AvatarContainer avatarContent="V">
				<AvaEditBtn variant="contained">change photo</AvaEditBtn>
			</AvatarContainer>
			<form onSubmit={formik.handleSubmit}>
				<Input
					name="firstName"
					label="first name"
					value={formik.values.firstName}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.firstName && Boolean(formik.errors.firstName)}
					helperText={
						formik.touched.firstName && formik.values.firstName
							? formik.errors.firstName
							: null
					}
				/>
				<Input
					name="surname"
					label="surname"
					value={formik.values.surname}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.surname && Boolean(formik.errors.surname)}
					helperText={
						formik.touched.surname && formik.values.surname
							? formik.errors.surname
							: null
					}
				/>
				<Input
					name="username"
					label="username"
					value={formik.values.username}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.username && Boolean(formik.errors.username)}
					helperText={
						formik.touched.username && formik.values.username
							? formik.errors.username
							: null
					}
				/>
				<Input
					name="email"
					label="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={
						formik.touched.email && formik.values.email
							? formik.errors.email
							: null
					}
				/>
				<Grid columnSpacing={1} container>
					<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
						<SelectTextField
							name="wt"
							label="enter weight"
							value={formik.values.wt}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.wt && Boolean(formik.errors.wt)}
							helperText={
								formik.touched.wt && formik.values.wt ? formik.errors.wt : null
							}
						/>
						<SelectDropdown
							name="wtUnit"
							value={formik.values.wtUnit}
							onChange={formik.handleChange}
							label="weight unit"
						>
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
							label="enter height"
							value={formik.values.ht}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.ht && Boolean(formik.errors.ht)}
							helperText={
								formik.touched.ht && formik.values.ht ? formik.errors.ht : null
							}
						/>
						<SelectDropdown
							name="htUnit"
							value={formik.values.htUnit}
							onChange={formik.handleChange}
							label="height unit"
						>
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
					label="password"
					type="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={
						formik.touched.password && formik.values.password
							? formik.errors.password
							: null
					}
				/>
				<Input
					name="confirmPassword"
					label="confirm password"
					type="password"
					value={formik.values.confirmPassword}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.confirmPassword &&
						Boolean(formik.errors.confirmPassword)
					}
					helperText={
						formik.touched.confirmPassword && formik.values.confirmPassword
							? formik.errors.confirmPassword
							: null
					}
				/>
				<StyledTxtField
					name="bio"
					label="bio"
					multiline
					rows={4}
					fullWidth
					value={formik.values.bio}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<StyledTxtField
					name="trainCategories"
					label="looking for..."
					multiline
					rows={4}
					fullWidth
					value={formik.values.trainCategories}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
				/>
				<SelectDropdown
					name="trainingStatus"
					value={formik.values.trainingStatus}
					onChange={formik.handleChange}
					label="Training Status"
					sx={{ width: '100%' }}
				>
					{usrStatus.map((status) => (
						<MenuItem key={`editUsrStat_${status}`} value={status}>
							{status}
						</MenuItem>
					))}
				</SelectDropdown>
				<FormButton variant="contained" type="submit">
					Save
				</FormButton>
			</form>
		</PageContainer>
	)
}

export default Edit
