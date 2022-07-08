import { checkingCredentials, logout , login } from './authSlice'
import { signInWithGoogle } from '../../firebase/providers'
import { AppDispatch } from "../store"

export const checkGoogleAuth = () => async ( dispatch : AppDispatch ) => {

    dispatch(checkingCredentials())
    
    const result = await signInWithGoogle()

    if( !result.ok ) return dispatch(logout(result.message!))
    
    dispatch(login(result))

}