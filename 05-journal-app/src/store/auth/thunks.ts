import { checkingAuthentication, logout , login } from './authSlice'
import { UserWithEmailAndPassword } from '../../auth/types'
import { cleanLogout } from '../journal/journalSlice'
import { AppDispatch } from "../store"
import { 
    creatingUserWithEmailAndPassword,
    validateAuthWithEmailAndPassword, 
    logoutFirebaseAuth,
    signInWithGoogle
} from '../../firebase/providers'

export const checkingCredentials = () => async ( dispatch : AppDispatch ) : Promise<void> => {

    dispatch(checkingAuthentication())

}

export const checkGoogleAuth = () => async ( dispatch : AppDispatch ) => {

    dispatch(checkingAuthentication())
    
    const result = await signInWithGoogle()

    if( !result.ok ) return dispatch(logout(result.message!))
    
    dispatch(login(result))

}

export const startCreatingUserWithEmailAndPassword = ( user : UserWithEmailAndPassword ) => async ( dispatch : AppDispatch ) => {

    dispatch(checkingAuthentication())
    
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

    dispatch(checkingAuthentication())

    await logoutFirebaseAuth()

    dispatch(cleanLogout())

    return dispatch(logout(""))

}