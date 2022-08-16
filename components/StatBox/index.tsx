import React from 'react'
import { StatGrid } from './StateBox.styled'

interface StatBoxInterface {
	children: React.ReactNode
}

const StatBox = ({ children }: StatBoxInterface) => (
	<StatGrid>{children}</StatGrid>
)

export default StatBox
