import React from 'react'
import logo from "./Imgs/notflix-img.jpg"
import "./Css/Navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <img
                className="nav-logo"
                src={logo}
            />
        </div>
    )
}

export default Navbar
