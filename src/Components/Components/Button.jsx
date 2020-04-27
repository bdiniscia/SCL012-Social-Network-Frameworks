import React from 'react';
import PropTypes from 'prop-types'
import './Button.sass'

const Button = ({title, onClick}) => {
    return (
        <button 
            className = 'button'
            onClick = {onClick}>
            {title}
        </button>
    )
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    onClick: PropTypes.func
}

export default Button;