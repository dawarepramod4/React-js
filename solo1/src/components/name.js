import React from "react"
import "../styles/name.css"
import linkedIn from "../images/linkedIn.svg"
import mail from "../images/Mail.svg"
export default function Name(){
  return (
    <div className="name-div">
      <h1 className="user-name" >Pramod Daware</h1>
      <p className="user-profile" >FrontEnd Developer</p>
      <p className="portfolio-site">pramoddaware.com</p>
      <div className="action-buttons">
        <button className="email-button">
          <img src={mail} alt="icon"/>
          Email</button>
        <button className="linkedIn-button">
          <img src= {linkedIn} alt="icon"/>
          LinkedIn</button>
      </div>
    </div>
  )
}