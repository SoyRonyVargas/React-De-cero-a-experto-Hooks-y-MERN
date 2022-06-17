import { render , screen } from "@testing-library/react"
import { AuthContext } from "../../context/AuthContext"
import { MemoryRouter } from "react-router"
import AppRouter from "../../router"

describe('Pruebas en en <AppRouter/>', () => { 

    test('debe de mostrar el login si no esta autenticado', () => {

        const values = {
            logged: false
        }

        render(
            <AuthContext.Provider value={values}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getAllByText("Login").length ).toBe(2)

    })
    
    test('debe de mostrar la pantalla marvel si esta autenticado', () => {

        const values = {
            logged: true
        }

        render(
            <AuthContext.Provider value={values}>
                <MemoryRouter initialEntries={["/marvel"]}>
                    <AppRouter/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect( screen.getByText("Logout") ).toBeTruthy()

    })

})

export {}