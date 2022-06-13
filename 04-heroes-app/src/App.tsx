import AuthProvider from './context/AuthProvider'
import AppRouter from './router'
import './css/style.css'

function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default App
