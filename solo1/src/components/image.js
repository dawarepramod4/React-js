import React from "react";
import picture from "../images/profile-photo.jpg"
import "../styles/image.css"

export default function Image(){
  return (
    <div className="profile-image">
      <img src={picture} alt="Profile_Picture" />
    </div>
  )
}