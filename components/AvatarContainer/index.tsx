import { Avatar } from '@mui/material'
import React from 'react'
import AvatarDiv from './AvatarContainer.styled'

interface AvatarContainerProps {
	children: React.ReactNode
	avatarContent: string | undefined
}

const AvatarContainer = ({ children, avatarContent }: AvatarContainerProps) => (
	<AvatarDiv>
		<Avatar sx={{ width: 80, height: 80 }}>{avatarContent}</Avatar>
		{children}
	</AvatarDiv>
)

export default AvatarContainer
