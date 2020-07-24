import React from 'react'
import './Photo.css'

const Photo = ({ photo, index, id, handleClick, currentUserVotes }) => {
  const currentVote = currentUserVotes && currentUserVotes.find(vote => vote.photo_id === id)

  return (
    <div className='photo-container'>
      <div className='stars-container-photo'>
        {
          currentVote !== undefined ? new Array(currentVote.vote).fill(0).map((_, i) => (
            <i key={i} className='fas fa-star' />
          )) : <div className='empty-stars-container' />
        }
      </div>
      <img
        src={`${process.env.REACT_APP_SERVER_URL}/${photo.photo_url}`}
        onClick={handleClick}
        id={index}
        alt={photo.photo_url}
        className='gallery-image'
      />
    </div>
  )
}

export default Photo
