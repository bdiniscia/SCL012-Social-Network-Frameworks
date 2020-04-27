import React from 'react';
import './App.sass';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Welcome from './Components/Welcome'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Router>
          <Switch>
            <Route exact path="/">
              <Welcome />
            </Route>
            <Route path="/SignUp">
              <SignUp />
            </Route>
            <Route path="/SignIn">
              <SignIn />
            </Route>
          </Switch>
      </Router>    
    </div>
  );
}

export default App;
