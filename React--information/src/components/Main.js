import React from "react"
import logo from "./logo.png"

export default function MainContent(){
    return(
        <main className="main-content">
            <img className="main-image" src={logo} />
            <h1 className="facts-topic"> Fun facts about React</h1>

            <ul className="fun-facts-list">
                <li> Was first released in 2013</li>
                <li> Was originally created by Jordan Walke</li>
                <li> Has well over 100K stars on GitHub</li>
                <li> Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}