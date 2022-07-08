import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
// import type { RootState } from '../store'

interface AuthState {
  status: string  // 'checking', 'not-authenticated', 'authenticated'
  uid: string | null
  email: string | null
  displayName: string | null
  photoURL: string | null
  errorMessage: string | null
}

export interface SignGoogleStatus {
  ok: boolean
  displayName?: string | null,
  photoURL?: string | null,
  email?: string | null,
  uid?: string
  message?: string
}

const initialState: AuthState = {
    displayName: null,
    email: null,
    errorMessage: null,
    photoURL: null,
    status: "not-authenticated",
    uid: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
    login: ( state , { payload } : PayloadAction<SignGoogleStatus> ) => {
      state.displayName = payload.displayName!;
      state.email = payload.email!;
      state.errorMessage = null;
      state.photoURL = payload.photoURL!;
      state.status = "authenticated";
      state.uid = payload.uid!;
    },
    logout: ( state , { payload } : PayloadAction<string> ) => {
      state.displayName = null;
      state.email = null;
      state.errorMessage = payload;
      state.photoURL = null;
      state.status = "not-authenticated";
      state.uid = null;
    },
    checkingCredentials: ( state ) => {
      state.status = "checking"
    }
  },
})

export const { login ,logout , checkingCredentials } = authSlice.actions

// selectors

export const selectStatus = ( state : RootState ) => state.auth.status === "checking"

export default authSlice.reducer