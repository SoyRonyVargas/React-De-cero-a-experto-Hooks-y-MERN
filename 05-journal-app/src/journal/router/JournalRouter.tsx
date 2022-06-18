import { Routes , Route , Navigate } from 'react-router-dom'
import JournalPage from '../pages/JournalPage'

const JournalRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<JournalPage/>} />
        <Route path='/*' element={<Navigate to="/" />} />
    </Routes>
  )
}

export default JournalRouter