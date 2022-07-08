import { signInWithPopup, GoogleAuthProvider, UserCredential } from 'firebase/auth'
import { SignGoogleStatus } from '../store/auth/authSlice'
import { firebaseAuth } from './config'

export const signInWithGoogle = async () : Promise<SignGoogleStatus> => {
    
    try {

        const provider = new GoogleAuthProvider()

        const credential: UserCredential = await signInWithPopup(firebaseAuth, provider)

        const { displayName, photoURL, email, uid } = credential.user

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        }

    }
    catch ( err : any ) {

        const { message } = err

        return {
            ok: false,
            message
        }

    }


}