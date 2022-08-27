import React from "react"
import "../Styles/header.css"

export default function Header(){
  return (
    <div className="header">
      <div className="header--name">
        <img src="./images/Troll-Face.svg" alt="logo"/>
        <p>Meme Generator</p>
      </div>
      <div className="project--number">
        <p>React Course - Project 3 </p>
      </div>
    </div>
  )
}