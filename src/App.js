import React, { useState } from 'react';
import Form from "./components/Form";
import Results from "./components/Results";
import logo from './logo.svg';
import './App.css';

function App() {
  const [ state, setState ] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Form className="Form-inputs" inputs = {state} setInputs = {setState} />
      <hr />
      <Results data = {state} />
    </div>
  );
}

export default App;
