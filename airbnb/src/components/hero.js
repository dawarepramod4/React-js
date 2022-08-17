import React from "react"
// import HeroImage from "../images/Hero.png"
import "../styles/hero.css"


export default function Hero(){
  return (
    <div>
    <div className="hero">
      <img src="./images/Hero.png" alt="heroImage" />
    </div>
    <div className="heading">
      <h1>Online Experiences</h1>
      <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
    </div>
    </div>
  )
}