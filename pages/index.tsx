import { Button, Typography } from '@mui/material'
import type { NextPage } from 'next'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/app/hooks'
import { changeMe } from '../redux/features/test'

const Home: NextPage = () => {
	const { value } = useAppSelector((state) => state.test)
	const dispatch = useAppDispatch()

	const callApi = async () => {
		const fetchCreators = await fetch('/api/fetchCreators')
		const res = await fetchCreators.json()

		if (res) console.log(res.data)
	}

	callApi()

	return (
		<>
			<h1>Hello World!!</h1>
			<Typography variant="subtitle1">{value}</Typography>
			<Button variant="contained" onClick={() => dispatch(changeMe())}>
				Change My State!
			</Button>
		</>
	)
}

export default Home
