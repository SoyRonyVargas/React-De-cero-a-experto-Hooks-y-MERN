import { render , screen , fireEvent } from "@testing-library/react"
import { AuthContext } from "../../../context/AuthContext"
import { Navbar } from "../../../components/UI/NavBar"
import { MemoryRouter } from "react-router"

const mockedUseNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en en <Navbar/>', () => { 

    test('deberia de mostrar el nombre del usuario', () => {

        const values = {
            logged: true,
            username: "Auronplay"
        }

        const { container } = render(
            <AuthContext.Provider value={values}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const username_paragraph = container.querySelector("#username")

        expect( screen.getByText(values.username) ).toBeTruthy()

        expect( username_paragraph ).toBeTruthy()
        
        expect( username_paragraph?.innerHTML ).toBe( values.username )

    })

    test('deberia de llamar el logout y navigate al cerrar la sesion', () => { 

        const values = {
            logged: true,
            username: "Auronplay",
            logout: jest.fn()
        }

        const { container } = render(
            <AuthContext.Provider value={values}>
                <MemoryRouter>
                    <Navbar/>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        const buttonLogout = container.querySelector(".btn__logout")!;

        fireEvent.click(buttonLogout)

        expect( mockedUseNavigate ).toHaveBeenCalled()
        expect( values.logout ).toHaveBeenCalled()
        
        expect( mockedUseNavigate ).toHaveBeenCalledTimes(1)
        expect( values.logout ).toHaveBeenCalledTimes(1)
        
        expect( mockedUseNavigate ).toHaveBeenCalledWith('/login', {
            "replace": true
        })

    })
    
})

export {}