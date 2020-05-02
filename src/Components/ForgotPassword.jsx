import React, { useState } from 'react'
import Button from './Components/Button'
import { auth } from '../Firebase/ConfigFirebase'
import { Link } from "react-router-dom"

const ForgotPassword = () => {
    const [email, setEmail] = useState('')

    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    const forgotPassword = (emailAddress) => {
        auth.sendPasswordResetEmail(emailAddress)
            .then(function() {
                alert('Email enviado, revisa tu bandeja de entrada o en la de spam')
                // Email sent.
            }).catch(function(error) {
                // An error happened.
            });
    }

    return (
        <div className="backgroungAuth">
            <div className='containerAuth'>
                <Link to='/' className='link'>
                  <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                </Link>
                <h1 className='titleAuth'>Reestablecer mi contraseña:</h1>
                <input className='inputsAuth'  id='email' type='email' placeholder='Tu correo electrónico' onChange={ e => handleChange(e)}/>
                <Button title='Recuperar' onClick={() => forgotPassword(email)}/>
            </div>
        </div>
    )
}

export default ForgotPassword
