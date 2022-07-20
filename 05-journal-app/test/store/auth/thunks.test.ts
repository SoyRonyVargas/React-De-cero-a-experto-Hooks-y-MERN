import { checkingAuthentication } from "../../../src/store/auth/authSlice"
import { checkingCredentials } from "../../../src/store/auth/thunks"
jest.mock("../../../src/firebase/providers")


describe('tests a los thunks de autenticacion', () => { 

    test('deberia llamar la autenticacion', async () => { 

        const dispatch = jest.fn()

        const fn : Function = await checkingCredentials()

        fn( dispatch )

        expect( dispatch ).toHaveBeenCalledWith( checkingAuthentication() )

    })

})