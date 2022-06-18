import { Routes , Route, Navigate } from 'react-router-dom'
import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

const AuthRouter = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>} />
        <Route path='/*' element={<Navigate to={'/auth/login'}/>} />
    </Routes>
  )
}

export default AuthRouter