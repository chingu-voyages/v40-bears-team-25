import { Box, Chip, Divider, Typography } from '@mui/material'
import React from 'react'
import AvatarContainer from '../../components/AvatarContainer'
import EditBtn from '../../components/Buttons/EditButton'
import SignOutBtn from '../../components/Buttons/SignOutBtn'
import NameBadgeCol from '../../components/NameBadgeCol'
import PageSection from '../../components/PageSection'
import PageTitleDiv from '../../components/PageTitleDiv'
import StatBox from '../../components/StatBox'
import StatItem from '../../components/StatBox/StatItem'
import { ChipBox, PageContainer } from './user.styled'

const UserView = () => (
	<PageContainer maxWidth="sm">
		<PageTitleDiv />
		<AvatarContainer avatarContent="V">
			<NameBadgeCol name="Valentino" surname="Rossi" handleName="@valeR46" />
		</AvatarContainer>
		<StatBox>
			<StatItem top="Training" center="looking" bottom="Status" />
			<StatItem top="weight" center="69" bottom="kg" />
			<StatItem top="BMI" center="21,1" bottom="normal" />
		</StatBox>
		<Divider sx={{ margin: '2em 0' }} />
		<PageSection sectionTitle="About">
			<Typography sx={{ textAlign: 'center' }}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Typography>
		</PageSection>
		<Divider sx={{ margin: '2em 0' }} />
		<PageSection sectionTitle="Looking For" sx={{ marginBottom: '4em' }}>
			<ChipBox>
				<Chip label="1" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
				<Chip label="Deletable" />
			</ChipBox>
		</PageSection>
		<Box
			sx={{
				display: 'flex',
				marginBottom: '4em',
				justifyContent: 'space-evenly',
			}}
		>
			<SignOutBtn sx={{ width: '45%' }}>Sign Out</SignOutBtn>
			<EditBtn sx={{ width: '45%' }}>Edit</EditBtn>
		</Box>
	</PageContainer>
)

export default UserView
