import React, { useState } from 'react'
import Button from './Components/Button'
import { firebase, auth } from '../Firebase/ConfigFirebase'
import Navbar from './Navbar'


const Home = () => {

    // Función que cierra sesión
    const closeSession = () => {
        auth.signOut()
        .then(() => {
            console.log('Saliendo');
            localStorage.removeItem('user')
        })
        .catch((error) => {
            console.log(error);
        });
    };

    return (
        <div>
            <Navbar />
            <h1>Home de la web</h1>
            <Button title='Cerrar Sesión' onClick={() => closeSession()}/>

        </div>
    )
}

export default Home
