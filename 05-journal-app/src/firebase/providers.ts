import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider, 
    signInWithPopup, 
    UserCredential,
    updateProfile,
    signOut
} from 'firebase/auth'
import { UserWithEmailAndPassword } from '../auth/types'
import { SignGoogleStatus } from '../store/auth/authSlice'
import { validatorError } from './manager'
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

        const { code = "" } = err

        return {
            ok: false,
            message: validatorError(code)
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

        const { code = "" } = err

        return {
            ok: false,
            message: validatorError(code)
        }

    }

}

export const validateAuthWithEmailAndPassword = async ( user : UserWithEmailAndPassword ) => {

    try 
    {
    
        const result = await signInWithEmailAndPassword( firebaseAuth , user.email , user.password )
        
        const { displayName, photoURL, email, uid } = result.user

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

        const { code = "" } = err

        return {
            ok: false,
            message: validatorError(code)
        }

    }

}

export const logoutFirebaseAuth = async () => {

    try 
    {

        await signOut(firebaseAuth)

        return {
            ok: true,
        }

    } 
    catch ( error : any ) 
    {
        
        const { code = "" } = error

        return {
            ok: false,
            message: validatorError(code)
        }

    }

}