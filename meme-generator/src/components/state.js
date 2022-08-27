import React from "react"

export default function State(){
  const [thingsArray,setThingsArray]=React.useState(["Thing 1","Thing 2"]);
  function addItem()
  {
    setThingsArray( 
      (thingsArray) =>{
      return [...thingsArray,`Things ${thingsArray.length}`]})
      
  }

  const Things=thingsArray.map((Thing)=>{return <p>{Thing}</p>})
  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {Things}
    </div>
  )
}