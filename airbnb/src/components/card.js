import React from "react"

import "../styles/card.css"

export default function Card(props){
  console.log(props)
  let badgeText
  if(props.item.openSpots===0){
    badgeText="SOLD OUT"
  }
  else if(props.item.location==="online")
  {
    badgeText="ONLINE"
  }
  return (
    <div className="card">
      {badgeText && <div className="card-badge">{badgeText}</div>}
      <div className="card-image">
        <img src={`./images/${props.item.coverImg}`} alt="actor"/>
      </div>
      <div className="card-stats">
        <img src="./images/Star.svg" alt="⭐"></img>
        <span className="rating">{props.item.stats.rating}</span>
        <span className="review-number">({props.item.stats.reviewCount}) &#183; {props.item.location}</span>
        </div>
        <div className="card-heading">
        <p>{props.item.title}</p>
        <p> <span className="price-tag">From ${props.item.price}</span> / person</p>
        </div>
      
    </div>
  )
}