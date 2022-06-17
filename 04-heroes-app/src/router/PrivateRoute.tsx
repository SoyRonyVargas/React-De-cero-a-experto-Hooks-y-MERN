import { Navigate , useLocation } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { useContext } from "react"

const PrivateRoute = ({ children } : any) => {
  
    const { logged } = useContext(AuthContext)

    const location = useLocation()

    const route = location.pathname + location.search

    window.localStorage.setItem( 'url' , route )

    return (
        logged 
        ? children
        : <Navigate to={'/login'} />
    )
}

export default PrivateRoute