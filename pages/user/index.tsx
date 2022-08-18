import { Box, Chip, Divider, Typography } from '@mui/material'
import Link from 'next/link'
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

interface UserViewProps {
	name: string
	lastName: string
	userName: string
	avatarContent: string
	bio: string
	trainingStatus: string
	trainingCategories: string[]
	wt: number
	wtUnit: string
	bmi: number
	bmiCategory: string
}

const UserView = ({ ...props }: UserViewProps) => {
	const handleSignOutClick = () => {
		// eslint-disable-next-line spaced-comment
		//clears potiential cookies, tokens, and userInformation in browser
	}

	;<PageContainer maxWidth="sm">
		<PageTitleDiv />
		<AvatarContainer avatarContent={props.avatarContent}>
			<NameBadgeCol
				name={props.name}
				surname={props.lastName}
				handleName={`@${props.userName}`}
			/>
		</AvatarContainer>
		<StatBox>
			<StatItem top="Training" center={props.trainingStatus} bottom="Status" />
			<StatItem top="weight" center={props.wt} bottom={props.wtUnit} />
			<StatItem top="BMI" center={props.bmi} bottom={props.bmiCategory} />
		</StatBox>
		<Divider sx={{ margin: '2em 0' }} />
		<PageSection sectionTitle="About">
			<Typography sx={{ textAlign: 'center' }}>{props.bio}</Typography>
		</PageSection>
		<Divider sx={{ margin: '2em 0' }} />
		<PageSection sectionTitle="Looking For" sx={{ marginBottom: '4em' }}>
			<ChipBox>
				{props.trainingCategories?.map((cat) => (
					<Chip key={`chipy_${cat}`} label={cat} />
				)) || 'Client do not indicate any specific training'}
			</ChipBox>
		</PageSection>
		<Box
			sx={{
				display: 'flex',
				marginBottom: '4em',
				justifyContent: 'space-evenly',
			}}
		>
			<Link passHref href="/" onClick={handleSignOutClick}>
				<SignOutBtn sx={{ width: '45%' }}>Sign Out</SignOutBtn>
			</Link>
			{/* NEED USERID => DYNAMIC ROUTING */}
			<Link passHref href="/user/edit" onClick={handleSignOutClick}>
				<EditBtn sx={{ width: '45%' }}>Edit</EditBtn>
			</Link>
		</Box>
	</PageContainer>
}

export default UserView
