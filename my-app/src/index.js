import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

// import Header from "./components/header.js"
// import MainContent from './components/MainContent.js';
// import Footer from './components/footer.js';
import App from './App';

let rootdiv=document.getElementById("root")
ReactDOM.render( <App/>,rootdiv)  //to use this convetion we need to have the Name as Camel case


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
