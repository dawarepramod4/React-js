import React from "react"
import './App.css';
import Header from './components/header';
import Hero from './components/hero';
import Card from './components/card';
import Data from "./data";

function App() {
  const cardData=Data.map(data=> <Card
   item={data}
/>)
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <div className='card-data'>
      {cardData}
      </div>
    </div>
  );
}

export default App;
