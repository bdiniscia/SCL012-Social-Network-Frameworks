import { auth } from './ConfigFirebase'
    
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



export { closeSession, emailVerification }