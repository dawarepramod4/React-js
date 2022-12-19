import React from "react";
import "../Styles/meme.css"
import memesData from "../memsData"
export default function Meme(){
  const [meme,setmeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_960_720.jpg"
  })

  const [allMemeImages, setAllMemeImages]=React.useState(memesData)
  


function handleClick(){

const memesArray=allMemeImages.data.memes
 let index=Math.floor(Math.random()*memesArray.length)
  let url=memesArray[index].url
  
  // react automatically puts the old value inside the callback function
  setmeme((Prevmeme)=>({
    ...Prevmeme,
    randomImage:url
  }))

}

  return (
<div className="Meme">
  <div className="form">
    <input type="text" placeholder="Top Text" />
    <input type="text" placeholder="Bottom Text " />
  </div>
  <button onClick={handleClick} className="form--button">Get a new meme image</button>
    <img className="meme--image" src={meme.randomImage} alt="" />
</div>
  );
}