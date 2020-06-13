import React from 'react'
// import PropTypes from 'prop-types'
import './CardPost.sass'

const CardPost = ({img, profilePic, author, likes, content, tags, zoom}) => {
    return (
        <div className='divPost'>
            <img alt='Pic of the post' src={img} className='imgPost' onClick={zoom}/>    
            <div className='contentPost'>
                <div className='idPost flexRow'>
                    <div className='authorDiv flexRow'>
                        {profilePic ?
                        <img alt='Profile pic of the author' src={profilePic} className='userPicPost' />
                        :
                        <img alt='Profile pic of the author' src={require('../../img/user.png')} className='userPicPost' />
                        }
                        <h5 className='authorPost margin0'>{author}</h5>
                    </div>
                    <div className='likesDiv flexRow'>
                        <h5 className='numLikes margin0'>{likes}</h5>
                        <img alt='Button of like' src={require('../../img/heart.png')} className='heartLike'/>
                    </div>
                </div>
                <p className='textPost margin0'>{content}</p>
                {tags && <p className='tagsPost'>{tags}</p>}
            </div>
        </div>
    )
}

export default CardPost
