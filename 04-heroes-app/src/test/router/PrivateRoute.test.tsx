import { MemoryRouter, Route, Routes } from 'react-router-dom'
import { render , screen } from '@testing-library/react'
import { AuthContext } from "../../context/AuthContext"
import PrivateRoute from '../../router/PrivateRoute'

describe('Pruebas al componente <PrivateRoute/>', () => {

    test('debe de mostrar el children si esta autenticado', () => {

        const values = {
            logged: true
        }

        Storage.prototype.setItem = jest.fn()

        render(
            <AuthContext.Provider value={values}>
                <MemoryRouter>
                    <PrivateRoute>
                        <p>Ruta Privada</p>
                    </PrivateRoute>
                </MemoryRouter>
            </AuthContext.Provider>
           )

        expect( screen.getByText("Ruta Privada") ).toBeTruthy()

        expect( localStorage.setItem ).toHaveBeenCalled()
        
        expect( localStorage.setItem ).toHaveBeenCalledTimes(1)

    })

    // test('deberia navegar si esta autenticado', () => {

    //     const values = {
    //         logged: true,
    //         username: "auronplay"
    //     }

    //     render(
    //         <AuthContext.Provider value={values}>
    //             <MemoryRouter initialEntries={["/login"]}>
    //                 <Routes>
    //                     <Route path="/login" element={
    //                         <PublicRoute>
    //                             <p>publica</p>
    //                         </PublicRoute>
    //                         }/>
    //                     <Route path="/marvel" element={<h1>Marvel</h1>} />
    //                 </Routes>
    //             </MemoryRouter>
    //         </AuthContext.Provider>
    //     )

    //     expect(screen.getByText("Marvel")).toBeTruthy()

    //     screen.debug()
        
    // })

})
