import { types } from "../../types"

describe('Pruebas a los types', () => { 

    test("Deberia de regresar los mismos types", () => {

        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })

    })

})

export {}