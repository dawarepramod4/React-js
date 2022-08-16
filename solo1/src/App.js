import React from 'react';
import './App.css';
import Image from "./components/image"
import Info from "./components/info"
import Name from "./components/name"
import Footer from './components/footer';
function App() {
  return (
    <div className="App">
      <Image/>
      <Name/>
      <Info/>
      <Footer/>
    </div>
  );
}

export default App;
