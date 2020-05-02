import React from 'react'
import Button from './Components/Button'
import { firebase, auth } from '../Firebase/ConfigFirebase'


const Home = () => {

    React.useEffect(() => {
        
    })

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
            <h1>Home de la web</h1>
            <Button title='Cerrar Sesión' onClick={() => closeSession()}/>

        </div>
    )
}

export default Home
