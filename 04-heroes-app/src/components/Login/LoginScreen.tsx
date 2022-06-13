import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'

const LoginScreen = () => {
  
  const navigate = useNavigate()
  const { login } = useContext(AuthContext)

  const handleLogin = () => {

    const url = window.localStorage.getItem("url")

    
    login('Auronplay')
    
    if( url )
    {
      
      navigate( url , {
        replace: true
      })
      
    }
    else
    {
      
      navigate( '/marvel' , {
        replace: true
      })

    }

    

  }
  
  return (
    <section className=" gradient-form" style={{ backgroundColor: '#eee', height: '100vh' }}>
      <div className="container py-5 h-100">
        <h1>Login</h1>
        <hr />
        <button onClick={handleLogin} className='btn btn-primary'>Login</button>
      </div>
    </section>

  )
}

export default LoginScreen