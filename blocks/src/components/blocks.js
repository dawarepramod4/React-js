import React from "react"
import "../style/blocks.css"


export default function Blocks(props){
  console.log(props)
const Styles={
  backgroundColor: props.On ?"#8260c4": "#07101f"
 
}
  return(
    <div className="block" 
    style={Styles} 
    onClick={props.toggle}>

    </div>
  )

}