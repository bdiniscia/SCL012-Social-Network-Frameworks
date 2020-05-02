import React from 'react';
import './App.sass';
import SignIn from './Components/SignIn'
import SignUp from './Components/SignUp'
import Welcome from './Components/Welcome'
import Home from './Components/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { firebase, auth } from './Firebase/ConfigFirebase'
import { useSelector , useDispatch } from 'react-redux'
import { signUpAction } from './Actions/index'

function App() {

  const dispatch = useDispatch()
  const [firebaseUser, setFirebaseUser] = React.useState(false)

    React.useEffect(() => {
      console.log('1. Entrando al UseEffect')
      const fetchUser = () => {
        auth.onAuthStateChanged(user => {
            if(user){
              console.log('2. Entrando al IF del UseEffect')
                setFirebaseUser({
                  displayName : user.displayName,
                  email: user.email,
                  uid: user.uid,
                  emailVerified: user.emailVerified,
                  photoURL: user.photoURL})
            }else{
                setFirebaseUser({})
            }
        })
      }
      fetchUser()
    }, [])

    const getUserToStore = () => dispatch(signUpAction(firebaseUser))
    getUserToStore();


  const RutaPrivada = ({component, path, ...rest}) => {
    const userLocal = localStorage.getItem('user')
    if(userLocal){
      return <Route component={component} path={path} {...rest} />
    }else{
      return <Redirect to="/SignUp" {...rest} />
    }
  }


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
            <RutaPrivada path="/Home">
              <Home />
            </RutaPrivada>
          </Switch>
      </Router>    
    </div>
  );
}

export default App;