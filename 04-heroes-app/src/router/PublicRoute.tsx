import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router-dom"
import { useContext } from "react"

const PublicRoute = ({ children } : any) => {
  
    const { logged } = useContext(AuthContext)

    return (
        !logged 
        ? children
        : <Navigate to={'/marvel'} />
    )
}

export default PublicRoute