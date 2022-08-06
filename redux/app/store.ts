import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import testerSlice from '../features/test'

export const store = configureStore({
	reducer: {
		test: testerSlice,
	},
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>
