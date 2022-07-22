import { checkGoogleAuth, checkingCredentials , checkAuthWithEmailAndPassword , startLogout , startCreatingUserWithEmailAndPassword } from "../../../src/store/auth/thunks"
import { UserAuthCorrect , UserAuthIncorrect , UserAndPassword } from "../../fixtures/auth"
import { checkingAuthentication, login , logout } from "../../../src/store/auth/authSlice"
import { cleanLogout } from "../../../src/store/journal/journalSlice"
import { 
    signInWithGoogle as signInWithGoogleReal,
    validateAuthWithEmailAndPassword as validateAuthWithEmailAndPasswordReal,
    creatingUserWithEmailAndPassword
} from "../../../src/firebase/providers"
jest.mock("../../../src/firebase/providers")

describe('tests a los thunks de autenticacion', () => { 

    const dispatch = jest.fn();

    beforeEach( () => {

        jest.clearAllMocks()

    })
    
    test('deberia llamar la autenticacion', async () => { 

        const fn : Function = await checkingCredentials()

        fn( dispatch )

        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )

    })

    test('checkGoogleAuth debe de llamar el dispatch correctamente con el login y exito', async () => {  

        await (signInWithGoogleReal as jest.Mock).mockReturnValue(UserAuthCorrect)

        await checkGoogleAuth()( dispatch )

        expect( dispatch ).toHaveBeenCalled()

        expect( dispatch ).toHaveBeenCalledTimes( 2 )
        
        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )
        
        expect( dispatch ).toHaveBeenCalledWith( login(UserAuthCorrect) )

    })
    
    test('checkGoogleAuth debe de llamar el dispatch con error de autenticacion', async () => {  

        await (signInWithGoogleReal as jest.Mock).mockReturnValue(UserAuthIncorrect)

        await checkGoogleAuth()( dispatch )

        expect( dispatch ).toHaveBeenCalled()

        expect( dispatch ).toHaveBeenCalledTimes( 2 )
        
        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )
        
        expect( dispatch ).toHaveBeenCalledWith( logout(UserAuthIncorrect.message!) )

    })
    
    test('startCreatingUserWithEmailAndPassword debe de llamar el dispatch correctamente y crear el usuario correctamente', async () => {  

        await (creatingUserWithEmailAndPassword as jest.Mock).mockReturnValue(UserAuthCorrect)

        await startCreatingUserWithEmailAndPassword(UserAndPassword)( dispatch )

        expect( dispatch ).toHaveBeenCalled()

        expect( dispatch ).toHaveBeenCalledTimes( 2 )
        
        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )
        
        expect( dispatch ).toHaveBeenCalledWith( login(UserAuthCorrect) )

    })

    test('checkAuthWithEmailAndPassword debe de llamar el dispatch correctamente con el login y exito', async () => {  

        await (validateAuthWithEmailAndPasswordReal as jest.Mock).mockReturnValue(UserAuthCorrect)

        await checkAuthWithEmailAndPassword(UserAndPassword)( dispatch )

        expect( dispatch ).toHaveBeenCalled()

        expect( dispatch ).toHaveBeenCalledTimes( 2 )
        
        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )
        
        expect( dispatch ).toHaveBeenCalledWith( login(UserAuthCorrect) )

    })
    
    test('startLogout debe de llamar el dispatch correctamente y hacer el logout', async () => {  

        await (validateAuthWithEmailAndPasswordReal as jest.Mock).mockReturnValue(UserAuthCorrect)

        await startLogout()( dispatch )

        expect( dispatch ).toHaveBeenCalled()

        expect( dispatch ).toHaveBeenCalledTimes( 3 )
        
        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )
        
        expect( dispatch ).toHaveBeenCalledWith( cleanLogout() )
        
        expect( dispatch ).toHaveBeenCalledWith( logout("") )

    })

})