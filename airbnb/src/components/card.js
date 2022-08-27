import React from "react"

import "../styles/card.css"

export default function Card(props){
  console.log(props)
  let badgeText
  if(props.openSpots===0){
    badgeText="SOLD OUT"
  }
  else if(props.location==="online")
  {
    badgeText="ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="card-image">
        <img src={`./images/${props.coverImg}`} alt="actor"/>
      </div>
      <div className="card-stats">
        <img src="./images/Star.svg" alt="⭐"></img>
        <span className="rating">{props.stats.rating}</span>
        <span className="review-number">({props.stats.reviewCount}) &#183; {props.location}</span>
        </div>
        <div className="card-heading">
        <p>{props.title}</p>
        <p> <span className="price-tag">From ${props.price}</span> / person</p>
        </div>
      
    </div>
  )
}