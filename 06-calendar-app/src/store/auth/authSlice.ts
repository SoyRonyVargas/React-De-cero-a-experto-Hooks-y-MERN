import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { User , AuthState } from '../../types'
import { RootState } from '../store'

const initialState: AuthState = {
    user: null,
    status: 'not-authenticated',
    errorMsg: null
}

export const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    onLogin: ( state, { payload }: PayloadAction<User> ) => {
        state.status = "authenticated"
        state.errorMsg = null
        state.user = payload
    },
    onLogout: ( state ) => {
        state.status = "not-authenticated"
        state.errorMsg = null
        state.user = null
    },
    onChecking: ( state ) => {
        state.status = "checking"
        state.errorMsg = null
        state.user = null
    }
  },
})

export const { 
    onChecking , 
    onLogin , 
    onLogout 
} = AuthSlice.actions

export const selectUser = (state: RootState) => state.auth.user

export default AuthSlice