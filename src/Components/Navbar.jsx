import React, { useState, useRef, Fragment } from 'react'
import './Navbar.sass'
import { useSelector } from 'react-redux'
import defaultProfilePic from '../img/user.png'
import { closeSession } from '../Firebase/FirebaseFunctions'

const Navbar = (props) => {

    const [photoURL, setPhotoURL] = useState(defaultProfilePic)
    const actualPhoto = useSelector(state => state.currentUser.photoURL)

    React.useEffect(() => {
        if (actualPhoto) {
            setPhotoURL(actualPhoto)
        }
    }, [])


    return (
        <Fragment>
            <nav className='divNavbar'>
                <img alt='Logo of Beer Me Up' src={require('../img/logoBeerWhite.png')} className='logoNavbar' />
                <div className='divIconsNavbar'>
                    <img alt='Add new post' onClick={props.showModal} src={require('../img/plus.png')} className='iconsNavbar' />
                    <img alt='Liked posts' src={require('../img/heart.png')} className='iconsNavbar' />
                    <img alt='Top beers of the community' src={require('../img/star.png')} className='iconsNavbar' />
                    <div className='dropdown'>
                        <img alt='Profile' src={photoURL} className='iconsNavbar picProfile' />
                        <div className="dropdown-content">
                            <p>Ver mi perfil</p>
                            <p onClick={() => closeSession()}>Cerrar Sesión</p>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='bottomNavbar'>
                <img alt='Add new post' onClick={props.showModal} src={require('../img/plus.png')} className='iconsNavbar' />
                <img alt='Liked posts' src={require('../img/heart.png')} className='iconsNavbar' />
                <img alt='Top beers of the community' src={require('../img/star.png')} className='iconsNavbar' />
            </nav>
        </Fragment>

    )
}

export default Navbar
