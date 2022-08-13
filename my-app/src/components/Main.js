import React from "react";
import "../styles/Main.css"

export default function Main(){
  return(
    <div className="main-content">
      <h1 className="heading">
      Fun Facts about React
      </h1>
      <ul className="point-list">
        <li>Was First Released In 2013</li>
        <li>Created By Jordan Walke</li>
        <li>Has Well Over 100k Stars on Github</li>
        <li>Is maintained By Facebook</li>
        <li>Powers Thousands Of Enterprise Apps, Including Mobile Apps</li>
      </ul>
    </div>
  )
}