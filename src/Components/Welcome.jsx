import React from 'react'
import { Link } from "react-router-dom";
import './SignIn.sass'
import './Welcome.sass'
import Button from './Components/Button'

const Welcome = () => {
    return (
        <div className='backgroungAuth'>
            <div className='containerAuth'>
                <img alt='Logo of Beer Me Up' src={require('../img/logoBeer.png')} className='logoAuth' />
                <h1 className='titleWelcome'>Tu red social de cervezas</h1>
                <p className='textWelcome'>Comparte tus cervezas favoritas y encuentra nuevas con ayuda nuestra comunidad ¡Salud!<span role='img' aria-label='emoji of two beer mugs clinked together'>🍻</span></p>
                <Link to='/SignUp'>
                    <Button title='Registrarte'/>
                </Link>
                <Link to='/SignIn'>
                    <Button title='Loguearte'/>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;