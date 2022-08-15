import React from 'react'
import { Grid, TextField, MenuItem } from '@mui/material'
import {
	PageContainer,
	SelectTextField,
	FormButton,
	AvaEditBtn,
} from './edit.styled'
import Input from '../../components/Input'
import SelectDropdown from '../../components/SelectDropDown'
import PageTitleDiv from '../../components/PageTitleDiv'
import { wtUnits, htUnits, usrStatus } from '../../utils/constants'
import AvatarContainer from '../../components/AvatarContainer'

const Edit = () => (
	<PageContainer maxWidth="md">
		<PageTitleDiv title="Edit Profile" />
		<AvatarContainer avatarContent="V">
			<AvaEditBtn variant="contained">change photo</AvaEditBtn>
		</AvatarContainer>
		<form>
			<Input name="first_name" label="first name" />
			<Input name="surname" label="surname" />
			<Input name="username" label="username" />
			<Input name="email" label="email" />
			<Grid columnSpacing={1} container>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<SelectTextField name="weight" label="enter weight" />
					<SelectDropdown label="weight unit">
						{wtUnits.map((unit) => (
							<MenuItem value={unit}>{unit}</MenuItem>
						))}
					</SelectDropdown>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<SelectTextField name="height" label="enter height" />
					<SelectDropdown label="height unit">
						{htUnits.map((unit) => (
							<MenuItem value={unit}>{unit}</MenuItem>
						))}
					</SelectDropdown>
				</Grid>
			</Grid>
			<Input name="password" label="password" type="password" />
			<Input name="confirm_password" label="confirm password" type="password" />
			<TextField name="bio" label="bio" multiline rows={4} fullWidth />
			<TextField
				name="train_category"
				label="looking for..."
				multiline
				rows={4}
				fullWidth
			/>
			<SelectDropdown label="looking for" sx={{ width: '100%' }}>
				{usrStatus.map((status) => (
					<MenuItem value={status}>{status}</MenuItem>
				))}
			</SelectDropdown>
			<FormButton variant="contained">Save</FormButton>
		</form>
	</PageContainer>
)

export default Edit
