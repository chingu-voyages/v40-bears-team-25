import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 'this is the initial state' }

const testerSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		changeMe: (state) => {
			state.value = "You've changed my state!!!"
		},
	},
})

export const { changeMe } = testerSlice.actions
export default testerSlice.reducer
