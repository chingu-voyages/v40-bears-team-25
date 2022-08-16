import React from 'react'
import AvatarContainer from '../../components/AvatarContainer'
import NameBadgeCol from '../../components/NameBadgeCol'
import PageTitleDiv from '../../components/PageTitleDiv'
import StatBox from '../../components/StatBox'
import StatItem from '../../components/StatBox/StatItem'
import { PageContainer } from './user.styled'

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
	</PageContainer>
)

export default UserView
