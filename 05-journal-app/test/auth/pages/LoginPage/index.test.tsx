import LoginPage from '../../../../src/auth/pages/LoginPage'
import { render , screen } from '@testing-library/react'
import React from 'react'

describe('Probando el componente LoginPage', () => { 

    test("Boton de Google deberia llamar checkGoogleAuth" , () => {

        render(
            <LoginPage/>
        )
         
    })

})