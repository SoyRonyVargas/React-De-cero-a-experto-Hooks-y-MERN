import journalReducer from './journal/journalSlice'
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    journal: journalReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch