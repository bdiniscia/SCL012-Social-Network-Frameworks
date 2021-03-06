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
} from 'react-router-dom';
import { db, auth } from './Firebase/ConfigFirebase'
import { useDispatch } from 'react-redux'
import { signUpAction } from './Actions/index'
import ForgotPassword from './Components/ForgotPassword';

function App() {

  const dispatch = useDispatch()
  const [firebaseUser, setFirebaseUser] = React.useState(false)

  React.useEffect(() => {
    console.log('1. Entrando al UseEffect')
    const fetchUser = () => {  // Consigue el currentUser
      auth.onAuthStateChanged(user => {
          if(user){
            console.log('2. Entrando al IF del UseEffect')
              setFirebaseUser({ // La guarda en un estado
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

  // Esta función triggerea la actualización de currentUser del State con lo recogido de firebaseUser
  const getUserToStore = () => dispatch(signUpAction(firebaseUser))
  getUserToStore();

  const PrivateRoute = ({component, path, ...rest}) => {
    const userLocal = localStorage.getItem('user')
    if(userLocal){
      return <Route component={component} path={path} {...rest} />;
    }
    return <Redirect to='/SignUp' {...rest} />;
  }

  const allPosts = db.collection('posts').orderBy('time', 'desc');
  const popularPosts = db.collection('posts').orderBy('like', 'desc');


  return (
    <div className='App'>
       <Router>
          <Switch>
            <Route exact path='/' component={Welcome} />
            <Route path='/SignUp' component={SignUp} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/ForgotPassword' component={ForgotPassword} />
            <PrivateRoute path='/Home'
              component={() => <Home postsToRender={allPosts} title={`¡Bienvenido/a! ¿Listo/a para una birra?`}/>} />
            <PrivateRoute path='/MostPopular'
              component={() => <Home postsToRender={popularPosts} title={`Posts más populares`} />} />
          </Switch>
      </Router>    
    </div>
  );
}

export default App;