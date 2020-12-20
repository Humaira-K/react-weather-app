import React from "react"
import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
 
     <Weather defaultCity="Toronto"/>

     <footer className="github-linkedin-link">
      <p>
        <a
          href="https://github.com/Humaira-K/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Source Code
        </a>{" "}
        by{" "}
        <a
          href="https://www.linkedin.com/in/humairakhan/"
          target="_blank"
          rel="noreferrer"
        >
          Humaira Khan
        </a>
      </p>
    </footer>
    </div>
    </div>
  );
}


