import { auth, db } from './ConfigFirebase'
    
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

const postLike = (id, user) => {
  console.log('Está entrando el postlike');

  // de la collection post traeme el documento con el ID, 'id'
  db.collection('posts').doc(id).get().then((query) => {
    const post = query.data();

    if (post.like.includes(user)) {
      for (let i = 0; i < post.like.length; i++) {
        if (post.like[i] === user) { // verifica si ya el usuario está en el array
          post.like.splice(i, 1); // sentencia para eliminar un elemento de un array

          db.collection('posts').doc(id).update({ // para actualizar el array
            like: post.like,
          });
        }
      }
    } else {
      post.like.push(user); // entonces incluyeme este usuario en este array
      db.collection('posts').doc(id).update({
        like: post.like,
      });
    }
  })
  .catch((error) => {
    console.log(error);
  });
};



export { closeSession, emailVerification, postLike }