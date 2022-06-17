import { render , screen } from '@testing-library/react'
import { AuthContext } from "../../context/AuthContext"
import PublicRoute from "../../router/PublicRoute"
import { MemoryRouter, Route, Routes } from 'react-router-dom'

describe('Pruebas al componente <PublicRoute/>', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const values = {
            logged: false
        }

        render(
            <AuthContext.Provider value={values}>
                <PublicRoute>
                    <p>publica</p>
                </PublicRoute>
            </AuthContext.Provider>
           )

        expect( screen.getByText("publica") ).toBeTruthy()

    })

    test('deberia navegar si esta autenticado', () => {

        const values = {
            logged: true,
            username: "auronplay"
        }

        render(
            <AuthContext.Provider value={values}>
                <MemoryRouter initialEntries={["/login"]}>
                    <Routes>
                        <Route path="/login" element={
                            <PublicRoute>
                                <p>publica</p>
                            </PublicRoute>
                            }/>
                        <Route path="/marvel" element={<h1>Marvel</h1>} />
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        )

        expect(screen.getByText("Marvel")).toBeTruthy()

        screen.debug()
        
    })

})
