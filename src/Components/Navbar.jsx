import React, { useState } from 'react'
import './Navbar.sass'
import { useSelector } from 'react-redux'
import defaultProfilePic from '../img/user.png'

const Navbar = () => {

    const [photoURL, setPhotoURL] = useState(defaultProfilePic)
    const actualPhoto = useSelector(state => state.currentUser.photoURL)

    React.useEffect(() => {
        if (actualPhoto) {
            console.log(actualPhoto)
            setPhotoURL(actualPhoto)
        }
    }, [])
    
    
    return (
        <nav className='divNavbar'>
            <img alt='Logo of Beer Me Up' src={require('../img/logoBeerWhite.png')} className='logoNavbar' />
            <div className='divIconsNavbar'>
                <img alt='Add new post' src={require('../img/plus.png')} className='iconsNavbar' />
                <img alt='Liked posts' src={require('../img/heart.png')} className='iconsNavbar' />
                <img alt='Top beers of the community' src={require('../img/star.png')} className='iconsNavbar' />
                <img alt='Profile' src={photoURL} className='iconsNavbar picProfile' />
            </div>
        </nav>
    )
}

export default Navbar
