import { login, logout, selectStatusAuth } from "../store/auth/authSlice"
import { startGetNotes } from "../store/journal/thunks"
import { onAuthStateChanged } from "firebase/auth"
import { firebaseAuth } from '../firebase/config'
import { useSelector } from "react-redux"
import { useAppDispatch } from "."
import { useEffect } from 'react'

const useSession = () => {

    const status = useSelector(selectStatusAuth)
    const dispatch = useAppDispatch()

    useEffect( () => {

        onAuthStateChanged( firebaseAuth , ( user ) => {

            if( user )
            {

                const { displayName, photoURL, email, uid } = user

                dispatch(login({ 
                    displayName, 
                    photoURL, 
                    email, 
                    uid,
                    ok: true
                }))

                dispatch(startGetNotes())

            }
            else
            {
                dispatch(logout(null))
            }

        })

    }, [])

    return {
        status
    }

}

export default useSession