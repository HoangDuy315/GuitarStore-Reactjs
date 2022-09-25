import React from 'react'
import { NavLink } from 'react-router-dom'
import Cart from './buttons/Cart'
import Login from './buttons/Login'
import Signup from './buttons/Signup'
import '../style/style.css'


const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark shadow-sm border-light">
                <div className="container-fluid py-1">
                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto px-2 mb-2 mb-lg-0">
                            <li className="nav-item">
                            <NavLink className="nav-link text-light fw-bold" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-light fw-bold" to="/products">Product</NavLink>
                            </li>

                            <li className="nav-item">
                            <NavLink className="nav-link text-light fw-bold" to="/staff">Staff</NavLink>
                            </li> 
                            <li className="nav-item">
                            <NavLink className="nav-link text-light fw-bold" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-link text-light fw-bold" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    <NavLink className="navbar-brand mx-auto fw-bold text-warning fs-4" to="/">GNAHYUD</NavLink>
                    <Login/>
                    <Signup/>
                    <Cart/>
                    </div>  
                </div>
            </nav>
        </>
    )
}

export default Header
