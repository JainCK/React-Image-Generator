import React from "react"
import logo from "../assets/logo.png"

export default function Header () {
    return (
        <header className="header">
         <img src={logo} alt="logo" className="header--image" />
         <h2 className="header--title">Meme Generator</h2>
         <h4 className="header--project">React Practice Project</h4>
        </header>
    )
}