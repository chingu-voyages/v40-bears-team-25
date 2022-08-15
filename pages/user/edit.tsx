import React from 'react'
import Input from '@/components/Input'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import {
	Grid,
	TextField,
	Typography,
	InputLabel,
	MenuItem,
	Avatar,
	IconButton,
} from '@mui/material'
import {
	PageContainer,
	SelectTextField,
	SelectGroup,
	CustomSelect,
	FormButton,
	LookingForDropdown,
	AvatarEditContainer,
	AvaEditBtn,
	TitleMenuContainer,
} from './edit.styled'

const Edit = () => (
	<PageContainer maxWidth="sm">
		<TitleMenuContainer>
			<IconButton>
				<ArrowBackIosNewIcon />
			</IconButton>
			<Typography variant="h4">Edit Profile</Typography>
		</TitleMenuContainer>
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
					<SelectGroup>
						<InputLabel>weight unit</InputLabel>
						<CustomSelect label="weight unit">
							<MenuItem value="" disabled>
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</CustomSelect>
					</SelectGroup>
				</Grid>
				<Grid item xs={12} md={6} sx={{ display: 'flex' }}>
					<SelectTextField name="height" label="enter height" />
					<SelectGroup>
						<InputLabel>height unit</InputLabel>
						<CustomSelect label="height unit">
							<MenuItem value="" disabled>
								<em>None</em>
							</MenuItem>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</CustomSelect>
					</SelectGroup>
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
			<LookingForDropdown>
				<InputLabel>search status</InputLabel>
				<CustomSelect label="search status">
					<MenuItem value="" disabled>
						<em>None</em>
					</MenuItem>
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</CustomSelect>
			</LookingForDropdown>
			<FormButton variant="contained">Save</FormButton>
		</form>
	</PageContainer>
)

export default Edit
