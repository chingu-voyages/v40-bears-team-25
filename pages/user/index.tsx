import StyledButton from '@/components/Buttons'
import { useAppSelector } from '@/redux/app/hooks'
import { fetcher } from '@/utils/helper'
import { Box, Chip, Divider, LinearProgress, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import useSWR from 'swr'
import AvatarContainer from '../../components/AvatarContainer'
import NameBadgeCol from '../../components/NameBadgeCol'
import PageSection from '../../components/PageSection'
import PageTitleDiv from '../../components/PageTitleDiv'
// import StatBox from '../../components/StatBox'
import { ChipBox, PageContainer } from './user.styled'

/* 
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
*/

const UserView = () => {
	// eslint-disable-next-line spaced-comment
	//BE: What's the endpoint to view a user?
	const userId = useAppSelector((state) => state.auth.user.userId)
	const { data, error } = useSWR(`/api/user/${userId}`, fetcher)

	if (error) return <div>Authorisation Failed: Please sign again.</div>
	if (!data)
		return (
			<Box sx={{ width: '100%' }}>
				<LinearProgress />
			</Box>
		)

	const handleSignOutClick = () => {
		// eslint-disable-next-line spaced-comment
		//clears potiential cookies, tokens, and userInformation in browser
	}

	return (
		<PageContainer maxWidth="sm">
			<PageTitleDiv />
			<AvatarContainer avatarContent={data.avatarContent}>
				<NameBadgeCol
					name={data.name}
					surname={data.lastName}
					handleName={`@${data.userName}`}
				/>
			</AvatarContainer>

			<Divider sx={{ margin: '2em 0' }} />
			<PageSection sectionTitle="About">
				<Typography sx={{ textAlign: 'center' }}>{data.bio}</Typography>
			</PageSection>
			<Divider sx={{ margin: '2em 0' }} />
			<PageSection sectionTitle="Looking For" sx={{ marginBottom: '4em' }}>
				<ChipBox>
					{data.trainingCategories?.map((cat: string) => (
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
					<StyledButton sx={{ width: '45%' }} btnType="signout">
						Sign Out
					</StyledButton>
				</Link>
				{/* NEED USERID => DYNAMIC ROUTING */}
				<Link
					passHref
					href={`/user/edit/${data.userId}`}
					onClick={handleSignOutClick}
				>
					<StyledButton sx={{ width: '45%' }} btnType="edit" type="submit">
						Edit
					</StyledButton>
				</Link>
			</Box>
		</PageContainer>
	)
}

export default UserView
