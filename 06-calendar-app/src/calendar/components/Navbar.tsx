import { FaRegTimesCircle } from 'react-icons/fa'
import { ImageLogoNavbar } from '../styled'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar is-primary" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <ImageLogoNavbar 
                        src="/assets/navbar.svg" 
                        alt='Logo'
                    />
                </div>
                <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </div>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <button className="button is-light has-text-weight-bold	">
                                <FaRegTimesCircle className='mr-1'/>
                                Cerrar Sesión 
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar