import JournalRouter from '../journal/router/JournalRouter'
import AuthRouter from '../auth/router/AuthRouter'
import { Routes , Route } from 'react-router-dom'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/auth/*' element={<AuthRouter/>} />
        <Route path='/*' element={<JournalRouter/>} />
    </Routes>
  )
}

export default AppRouter