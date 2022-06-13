import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';

export const Navbar = () => {

    const styleActive = ({ isActive }: { isActive: boolean }) => `nav-item nav-link ${isActive && 'active'}`

    const navigate = useNavigate()

    const { logged , username , logout } = useContext(AuthContext)

    const handleLogout = () => {

        logout()
        
        navigate('/login', {
            replace: true
        })

    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark px-3 container-fluid" >

            <Link
                className="navbar-brand"
                to="/marvel"
            >
                SuperHeroes
            </Link>

            <div className="navbar-collapse">

                <div className="navbar-nav">

                    <NavLink
                        className={styleActive}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        // className="nav-item nav-link xxx" 
                        className={styleActive}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink
                        // className="nav-item nav-link xxx" 
                        className={styleActive}
                        to="/search"
                    >
                        Search
                    </NavLink>

                </div>

            </div>
            <form className="d-flex" role="search">
                <ul className="navbar-nav ml-auto">
                    {
                        logged && 
                        <li
                            className="nav-item nav-link "
                        >
                            { username }
                        </li>
                    }
                    <button
                        onClick={handleLogout}
                        className="btn nav-item nav-link"
                    >
                        Logout
                    </button>
                </ul>
            </form>
            
        </nav>
    )
}