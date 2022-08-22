import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export interface UserView {
	userId: string
	name: string
	lastName: string
	userName: string
	avatarContent: string
	bio?: string
	trainingStatus?: string
	trainingCategories?: string[]
	wt?: number
	wtUnit?: string
	bmi?: number
	bmiCategory?: string
}

const initialState = {
	user: {} as UserView | null,
}

export const fetchUser = createAsyncThunk(
	'auth/fetchUser',
	async (user: UserView) => user
)

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearUsrSession: (state) => {
			state.user = null
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUser.fulfilled, (state, action) => {
			state.user = action.payload as UserView
		})
	},
})

export const { clearUsrSession } = authSlice.actions
export default authSlice.reducer
