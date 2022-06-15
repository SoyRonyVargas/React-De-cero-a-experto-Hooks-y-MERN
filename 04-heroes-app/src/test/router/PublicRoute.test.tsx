import { }
import { Routes, Route, MemoryRouter } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import PublicRoute from "../../router/PublicRoute"
import { shallow } from 'enzyme'
import React from "react"

describe('Pruebas al componente <PublicRoute/>', () => {

    test('debe de mostrar el children si no esta autenticado', () => {

        const values = {
            logged: false
        }

        jest.spyOn(React, 'useContext').mockImplementation(() => (values));

        const wrapper = shallow(
            <PublicRoute>
                <p>publica</p>
            </PublicRoute>
           )

        expect(wrapper.find("p").contains("publica")).toBe(true)

    })

    test('deberia navegar si esta autenticado', () => {

        const values = {
            logged: true,
            username: "auronplay"
        }

        jest.spyOn(React, 'useContext').mockImplementation(() => (values));

        const wrapper = shallow(
            <MemoryRouter initialEntries={["/login"]}>
                <Routes>
                    <Route path="/login" element={
                            <p>publica</p>
                        }/>
                    <Route path="/marvel" element={<h1>Marvel</h1>} />
                </Routes>
            </MemoryRouter>
        )

        expect(wrapper.find('h1').contains("Marvel")).toBe(true)

    })

})

export { }