import React, { useState, useRef, Fragment } from 'react'
import './Navbar.sass'
import { useSelector } from 'react-redux'
import defaultProfilePic from '../img/user.png'
import { closeSession } from '../Firebase/FirebaseFunctions'
import SvgPlus from './Components/Plus'
import Heart from './Components/Heart'
import SvgStar from './Components/Star'

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
                    <SvgPlus onClick={props.showModal} className='svgNavbar' />
                    <Heart className='svgNavbar' width="2.3em" height="2.3em"/>
                    <SvgStar className='svgNavbar' />
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
                <SvgPlus onClick={props.showModal} className='svgNavbar' />
                <Heart className='svgNavbar' width="2.3em" height="2.3em"/>
                <SvgStar className='svgNavbar' />
            </nav>
        </Fragment>

    )
}

export default Navbar
