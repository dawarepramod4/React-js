import React from "react";
import Fb from "../images/Facebook.svg"
import Ig from "../images/Instagram.svg"
import github from "../images/GitHub.svg"
import twitter from "../images/Twitter.svg"
import "../styles/footer.css"



export default function Footer(){
  return(
    <div className="footer-icons">
      <img src={twitter} alt="twitter" />
      <img src={Fb} alt="facebook" />
      <img src={Ig} alt="Ig" />
      <img src={github} alt="github" />
    </div>
  )
}