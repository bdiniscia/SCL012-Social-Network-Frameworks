import React from 'react';
import './App.sass';
import SignIn from './Components/SignIn'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <SignIn />
    </div>
  );
}

export default App;
