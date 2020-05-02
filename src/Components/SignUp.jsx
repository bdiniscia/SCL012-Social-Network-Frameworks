import React, { useState } from 'react'
import Button from './Components/Button'
import { Link } from "react-router-dom"
import { auth } from '../Firebase/ConfigFirebase'
import './SignIn.sass'
import { useSelector , useDispatch } from 'react-redux'
import { signUpAction } from '../Actions/index'


const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    // Maneja los cambios de los inputs del formulario
    const handleChange = (e) => {
        e.preventDefault()
        if (e.target.id === 'name') {
            setName(e.target.value)
            return
        }
        if (e.target.id === 'email') {
            setEmail(e.target.value)
            return
        }
        if (e.target.id === 'password') {
            setPassword(e.target.value)
            return
        }
    }

    // Función que envía el mail a usuario que se regista
    const emailVerification = () => {
        const user = auth.currentUser;
        user.sendEmailVerification()
          .then(() => {
            // Email sent.
            console.log('Enviando correo...');
          })
          .catch((error) => {
            // An error happened.
            console.log(error);
          });
      };

    // Función que inscribe al nuevo usuario
    const singUpNewUser = (email, password, name) => {
        auth.createUserWithEmailAndPassword(email, password)
          .then(result => result.user.updateProfile({
            displayName: name,
          }))
          .then(() => dispatch(signUpAction({ // Triggerea la acción de guardar el current User en el Store
            displayName : auth.currentUser.displayName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            emailVerified: auth.currentUser.emailVerified,
            photoURL: auth.currentUser.photoURL}
            )))
          .then(() => emailVerification()) // Envía el email al usuario
          .then(() => localStorage.setItem('user', JSON.stringify({  // Guarda el usuario en el LocalStorage
            displayName : auth.currentUser.displayName,
            email: auth.currentUser.email,
            uid: auth.currentUser.uid,
            emailVerified: auth.currentUser.emailVerified,
            photoURL: auth.currentUser.photoURL})))
          .then(() => window.location.pathname = '/Home') // The redirige al Home
          .catch((error) => {
          // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode === 'auth/weak-password') {
              alert('The password is too weak.');
            } else {
              alert(errorMessage);
            }
            console.log(errorCode);
            console.log(errorMessage);
          // ...
          });
      };



    return (
        <div className='backgroungAuth'>
            <div className='containerAuth'>
                <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                <h1 className='titleAuth'>Regístrate</h1>
                <input className='inputsAuth'  id='name' type='text' placeholder='Tu nombre' onChange={e => handleChange(e)}/>
                <input className='inputsAuth'  id='email' type='email' placeholder='Tu correo electrónico' onChange={e => handleChange(e)}/>
                <input className='inputsAuth'  id='password' type='password' placeholder='Tu contraseña' onChange={e => handleChange(e)}/>
                <Button title='Registrarme' onClick={() => singUpNewUser(email, password, name)}/>
                <button className='buttonAuth buttonGoogle'>
                    Sign up con 
                    <img alt='Logo of Google' src={require('../img/google-G.png')} className='googleLogo' />
                </button>
                <Link to='/SignIn'>
                    <p className='forgotPass toggleAuth'>Ya tengo cuenta</p>
                </Link>
            </div>
        </div>
    )
}

export default SignUp;