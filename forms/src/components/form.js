import React from "react"
import "../styles/form.css"

export default function Form(){
const [Data,setData]=React.useState(
  { firstName:"",
    lastName:"",
    email:"",
    comments:"",
    isFriendly:false
})

  console.log(Data)
const  handleChange = (event)=> {
  const {name,value,type,checked}=event.target
  setData( (prevData)=>{
    return {
      ...prevData,
      [name]:type==="checkbox" ? checked:value
      
      
    }
  })
  
}


return (
  <form >
    <input type="text"
          placeholder="First Name"
          onChange={handleChange} 
          name="firstName"
          value={Data.firstName}
          />
    <input type="text"
          placeholder="Last Name"
          onChange={handleChange} 
          name="lastName"
          value={Data.lastName}
          />
    <input type="email"
          placeholder="Email"
          onChange={handleChange} 
          name="email"
          value={Data.email}
          />
      <textarea 
        value={Data.comments}
        placeholder='Comments'
        onChange={handleChange}
        name="comments"
      />
      <div className="checkbox">
    <input type="checkbox" 
              name="isFriendly" 
              id="isFriendly"
              checked={Data.isFriendly}
              onChange={handleChange}
       />
      <label htmlFor="isFriendly">Are You Friendly</label>
      </div>
  </form>

  )
}