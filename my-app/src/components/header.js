import React from "react"
import logo from "../Images/logo.svg"
export default function Header(){
  return (
    <header>
          <nav className="nav">
          <img src={logo} alt ="logo" height="24"/>
          <ul className="nav-items">
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          </nav>
    </header>
  )
  }

