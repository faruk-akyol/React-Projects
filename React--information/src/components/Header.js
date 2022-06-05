import React from "react"
import logo from "./logo.png"

export default function Header(){
    return(
            <nav className="navbar">
                <img className="nav-image"  src={logo} />
                <h3 className="nav-logo-text">React Facts</h3>
            
                <h4 className="nav-project-name">React Course - Project 1</h4>
            </nav>
    )
}