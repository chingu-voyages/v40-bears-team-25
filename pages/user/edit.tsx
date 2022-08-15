import React from 'react'
import { Grid, TextField, MenuItem, Avatar } from '@mui/material'
import {
	PageContainer,
	SelectTextField,
	FormButton,
	AvatarEditContainer,
	AvaEditBtn,
} from './edit.styled'
import Input from '../../components/Input'
import SelectDropdown from '../../components/SelectDropDown'
import PageTitleDiv from '../../components/PageTitleDiv'

const Edit = () => (
	<PageContainer maxWidth="md">
		<PageTitleDiv title="Edit Profile" />
		<AvatarEditContainer>
			<Avatar sx={{ width: 80, height: 80 }}>V</Avatar>
			<AvaEditBtn variant="contained">change photo</AvaEditBtn>
		</AvatarEditContainer>
		<form>
			<Input name="first_name" label="first name" />
			<Input name="surname" label="surname" />
			<Input name="username" label="username" />
			<Input name="email" label="email" />
			<Grid columnSpacing={1} container>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<SelectTextField name="weight" label="enter weight" />
					<SelectDropdown label="weight unit">
						<MenuItem value="" disabled>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
					</SelectDropdown>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<SelectTextField name="height" label="enter height" />
					<SelectDropdown label="height unit">
						<MenuItem value="" disabled>
							<em>None</em>
						</MenuItem>
						<MenuItem value={10}>Ten</MenuItem>
						<MenuItem value={20}>Twenty</MenuItem>
						<MenuItem value={30}>Thirty</MenuItem>
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
				<MenuItem value="" disabled>
					<em>None</em>
				</MenuItem>
				<MenuItem value={10}>Ten</MenuItem>
				<MenuItem value={20}>Twenty</MenuItem>
				<MenuItem value={30}>Thirty</MenuItem>
			</SelectDropdown>
			<FormButton variant="contained">Save</FormButton>
		</form>
	</PageContainer>
)

export default Edit
