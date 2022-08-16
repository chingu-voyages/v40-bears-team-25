import React from 'react'
import AvatarContainer from '../../components/AvatarContainer'
import NameBadgeCol from '../../components/NameBadgeCol'
import PageTitleDiv from '../../components/PageTitleDiv'
import { PageContainer } from './user.styled'

const UserView = () => (
	<PageContainer maxWidth="sm">
		<PageTitleDiv />
		<AvatarContainer avatarContent="V">
			<NameBadgeCol name="Valentino" surname="Rossi" handleName="@valeR46" />
		</AvatarContainer>
	</PageContainer>
)

export default UserView
