import React from "react";
import logo from "../Images/logo.svg"
import "../styles/NavBar.css"

export default function NavBar(){
  return(
    <div className="header">
      <div className="logo">
      <img src={logo} alt="logo"/>
      <p>ReactFacts</p>
      </div>
      <div className="project-name">
        React Course - Project 1
      </div>
    </div>
  )
}