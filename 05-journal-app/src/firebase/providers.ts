import { 
    createUserWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup, 
    UserCredential,
    updateProfile
} from 'firebase/auth'
import { UserWithEmailAndPassword } from '../auth/types'
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

export const creatingUserWithEmailAndPassword = async ( user: UserWithEmailAndPassword ) => {

    try
    {

        await createUserWithEmailAndPassword( firebaseAuth , user.email , user.password )

        if( firebaseAuth.currentUser === null ) return;

        await updateProfile( firebaseAuth.currentUser , {
            displayName: user.displayName
        })

        const { displayName, photoURL, email, uid } = firebaseAuth.currentUser 

        return {
            ok: true,
            displayName,
            photoURL,
            email,
            uid
        }

    }
    catch( err : any )
    {
        
        const { message = "" } = err

        return {
            ok: false,
            message
        }

    }

}