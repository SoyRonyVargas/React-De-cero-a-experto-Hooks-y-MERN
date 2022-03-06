import { Link } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">ReactJS 😍</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pricing</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}

export default Navbar