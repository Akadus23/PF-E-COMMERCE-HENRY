import React from 'react'
import logo from './logo.svg';
import './LandingPage.css';

export default function LandingPage({onClick}) {

  //Funcion de prueba para el click
  function handleClick(){
    onClick()
  }
  return (
    <div className="App">
       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          onClick={handleClick}
          style={{cursor: 'pointer'}}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}