import { Routes , Route , Navigate } from 'react-router-dom'
import JournalRouter from '../journal/router/JournalRouter'
import AuthRouter from '../auth/router/AuthRouter'
import useSession from '../hooks/useSession'
import Loader from '../ui/Loader'

const AppRouter = () => {
  
  const { status } = useSession()

  if( status === "checking" )
  {
    return <Loader/>
  }

  return (
    <Routes>
      
      {
        status === "authenticated" 
        ? <Route path='/*' element={<JournalRouter/>} />
        : <Route path='/auth/*' element={<AuthRouter/>} />
      }

      <Route path='/*' element={ <Navigate to='/auth/login' />  } />
      
    </Routes>
  )
}

export default AppRouter