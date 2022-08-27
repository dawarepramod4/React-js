import React from "react"
import Blocks from './components/blocks';
import './App.css';
import Data from './components/data'

function App() {
  const [data,setData]=React.useState(Data)

  const toggle=(id) =>{
    setData(data.map( data=> 
      data.id===id ? {...data,on:!data.on}:data ))
  }
  const squareElements=data.map( (square) => {

    return( 
    <Blocks key={square.id} 
            id={square.id} 
            On={square.on} 
            toggle={()=>toggle(square.id)} />)
  })


  return (
    <div className="App">
      {squareElements}
    </div>
  );
}

export default App;
