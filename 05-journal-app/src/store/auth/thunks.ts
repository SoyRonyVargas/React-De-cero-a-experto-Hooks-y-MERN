import { checkingCredentials, logout , login } from './authSlice'
import { UserWithEmailAndPassword } from '../../auth/types'
import { AppDispatch } from "../store"
import { 
    creatingUserWithEmailAndPassword,
    validateAuthWithEmailAndPassword, 
    logoutFirebaseAuth,
    signInWithGoogle
} from '../../firebase/providers'

export const checkGoogleAuth = () => async ( dispatch : AppDispatch ) => {

    dispatch(checkingCredentials())
    
    const result = await signInWithGoogle()

    if( !result.ok ) return dispatch(logout(result.message!))
    
    dispatch(login(result))

}

export const startCreatingUserWithEmailAndPassword = ( user : UserWithEmailAndPassword ) => async ( dispatch : AppDispatch ) => {

    dispatch(checkingCredentials())
    
    const result = await creatingUserWithEmailAndPassword( user )

    if( !result?.ok ) return dispatch(logout(result?.message!))

    dispatch(login(result))

}

export const checkAuthWithEmailAndPassword = ( user : UserWithEmailAndPassword ) => async ( dispatch : AppDispatch ) => {

    dispatch(checkingCredentials())
    
    const result = await validateAuthWithEmailAndPassword( user )

    if( !result?.ok ) return dispatch(logout(result?.message!))

    dispatch(login(result))

}

export const startLogout = () => async ( dispatch : AppDispatch ) => {

    dispatch(checkingCredentials())

    await logoutFirebaseAuth()

    return dispatch(logout(""))

}