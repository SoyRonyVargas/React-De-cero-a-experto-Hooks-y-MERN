// import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
// import type { RootState } from '../store'

interface AuthState {
  status: string // 'checking', 'not-authenticated', 'authenticated'
  uid: string | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
}

const initialState: AuthState = {
    displayName: null,
    email: null,
    errorMessage: null,
    photoURL: null,
    status: "checking",
    uid: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    login: ( state ) => {
        
    },
    logout: ( state ) => {

    },
    checkingCredentials: ( state ) => {

    }
  },
})

export const { login ,logout , checkingCredentials } = authSlice.actions

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.auth.value

export default authSlice.reducer