import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import React, { useState, Fragment } from 'react';
import './Navbar.sass';
import defaultProfilePic from '../img/user.png';
import { closeSession } from '../Firebase/FirebaseFunctions';
import SvgPlus from './Components/Plus';
import Heart from './Components/Heart';
import SvgStar from './Components/Star';

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
                <Link to='/Home'>
                    <img alt='Logo of Beer Me Up' src={require('../img/logoBeerWhite.png')} className='logoNavbar' />
                </Link>
                <div className='divIconsNavbar'>
                    <div className='itemMenu' >
                        <SvgPlus onClick={props.showModal} className='svgNavbar' />
                        <span class='tooltiptext'>Crear post</span>
                    </div>
                    <div className='itemMenu' >
                        <Heart className='svgNavbar' width='2.3em' height='2.3em'/>
                        <span class='tooltiptext'>Me gustan</span>
                    </div>
                    <div className='itemMenu' >
                        <Link to='/MostPopular' >
                            <SvgStar className='svgNavbar' />
                        </Link>
                        <span class='tooltiptext'>Populares</span>
                    </div>
                    <div className='dropdown'>
                        <img alt='Profile' src={photoURL} className='iconsNavbar picProfile' />
                        <div className='dropdown-content'>
                            <p>Ver mi perfil</p>
                            <p onClick={() => closeSession()}>Cerrar Sesión</p>
                        </div>
                    </div>
                </div>
            </nav>
            <nav className='bottomNavbar'>
                <SvgPlus onClick={props.showModal} className='svgNavbar' />
                <Heart className='svgNavbar' width='2.3em' height='2.3em'/>
                <Link to='/MostPopular' >
                    <SvgStar className='svgNavbar' />
                </Link>
            </nav>
        </Fragment>

    )
}

export default Navbar
