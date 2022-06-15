import { AuthReducer } from "../../context/AuthReducer"
import { types } from "../../types"

describe('Pruebas al AuthReducer', () => { 

    const initialState = {
        logged: false
    }

    test("Deberia retornar el estado por defecto", () => {

        const state = AuthReducer( initialState , {})

        expect(state).toEqual(initialState)

    })

    test("Deberia de (login) llamar el login, autenticar y establecer el usuario" , () => {

        const action = {
            type: types.login,
            payload: {
                username: "Auronplay",
                logged: true
            }
        }

        const state = AuthReducer( initialState , action )

        expect( state ).toEqual({
            ...state,
            username: "Auronplay",
            logged: true
        })

    })

    test("Deberia de (logout) llamar el logout, borrar el name del usuario" , () => {

        const initialState = {
            username: "Auronplay",
            logged: true
        }

        const action = {
            type: types.logout,
        }

        const state = AuthReducer( initialState , action )

        expect( state ).toEqual({
            ...state,
            username: null,
            logged: false
        })

    })

})

export {}