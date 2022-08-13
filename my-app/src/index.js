import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//  import App from './App';
import reportWebVitals from './reportWebVitals';

import Header from "./components/header.js"
import MainContent from './components/MainContent.js';
import Footer from './components/footer.js';
 



const rootdiv=document.getElementById("root")
//  const h1= document.createElement("h1" ) //type of the element
//   h1.textContent="The imperative way" //add content
//   h1.className="header"   //class is written as the classname in the react
//   // document.getElementById('list').append(h1)

// // console.log(h1)

// // const element=<h1 className='header'>this is JSx</h1>
// // console.log(element)

// const navbar= (
// <nav>
//   <h1>My Website</h1>
//   <ul>
//     <li>Pricing</li>
//     <li>About</li>
//     <li>Contact</li>
//   </ul>
// </nav>
// )

// // rootdiv.append(navbar)

// ReactDOM.render(navbar,rootdiv)

// // ReactDOM.render(navbar,document.getElementById("list"))

// const image=(
//   <img src="./public/logo192.png" height="25"/>
// )

// const dom=(
//   <div>
//     <img src="download.png" height="24"/>
//   <h1>Fun Facts about React</h1>
//   <ol>
//     <li>declarative</li>
//     <li>nop imperative</li>
//   </ol>
//   </div>
// )

// ReactDOM.render(image,rootdiv)
// ReactDOM.render(dom,rootdiv)


//making this as function also called custom page component


// eslint-disable-next-line no-unused-vars
function TemperaryName(){
  return (
  <div>
      <Header/>
      <MainContent/>
      <Footer/>
  </div>
  )}
ReactDOM.render( <TemperaryName/>,rootdiv)  //to use this convetion we need to have the Name as Camel case





 











// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
