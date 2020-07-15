import React from 'react'

const Photo = ({ photo, id, handleClick }) => {
  return (
    <div>
      <img src={photo.photo_url} onClick={handleClick} id={id} alt={photo.photo_url} className='gallery-image' />
    </div>
  )
}

export default Photo
