import React from "react";

export default function Greeting(name)
{
//  const result=React.useState("Hello")
const [isImportant,setIsImportant]=React.useState("Yes")
function handleClick(){
  // setIsImportant("No");
  // setIsImportant(isImportant+"No");
  // setIsImportant((isImportant) =>{
  //   return isImportant+"No"
  // });
  setIsImportant((prevCount) =>{
    return prevCount+"No"
  });
  
} 

  return (
    <div onClick={handleClick}>
      {isImportant}
    </div>
  )
}