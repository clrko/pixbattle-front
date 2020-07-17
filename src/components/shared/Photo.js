import React, { useState, useEffect } from 'react'
import './Photo.css'

const Photo = ({ photo, id, handleClick, currentUserVotes }) => {
  const [currentVote, setCurrentVote] = useState(null)

  useEffect(() => {
    currentUserVotes.find(vote => {
      if (vote.photo_id === id) {
        setCurrentVote(vote.vote)
      }
      return currentVote
    })
  })

  return (
    <div className='photo-container'>
      <div className='stars-container-photo'>
        {
          currentVote !== null ? new Array(currentVote).fill(0).map((_, i) => (
            <i key={i} className='fas fa-star' />
          )) : <div className='empty-stars-container' />
        }
      </div>
      <img src={photo.photo_url} onClick={handleClick} id={id} alt={photo.photo_url} className='gallery-image' />
    </div>
  )
}

export default Photo
