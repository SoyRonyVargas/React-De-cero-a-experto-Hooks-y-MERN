/* eslint-disable eqeqeq */
import { Routes, Route, Navigate } from 'react-router-dom'
import CalendarPage from '../calendar/pages/CalendarPage'
import RegisterPage from '../auth/pages/RegisterPage'
import LoginPage from '../auth/pages/LoginPage'
import React from 'react'

const AppRouter = () => {

    // const authenticated = 'not-authenticated'
    const authenticated = 'authenticated'

    return (
        <Routes>
            {
                String(authenticated) == 'authenticated'
                    ?
                    <Route path='/*' element={<CalendarPage />} />
                    :
                    <>
                        <Route path='/auth/login' element={<LoginPage />} />
                        <Route path='/auth/register' element={<RegisterPage />} />
                    </>
            }
            
            <Route path='/*' element={<Navigate to={"/auth/login"}/>} />

        </Routes>
    )
}

export default AppRouter