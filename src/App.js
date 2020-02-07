import React from "react";
import logo from "./logo.svg";
import "./App.css";

let aliasModule;

try {
  aliasModule = require("alias/module");
} catch (e) {
  console.log('require("alias/module") - module does not exist');
}

if (typeof aliasModule !== "undefined") {
  console.log(`require("alias/module") - module exists`);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
