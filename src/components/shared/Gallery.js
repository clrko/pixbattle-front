import React from 'react'
import './Gallery.css'

const Gallery = props => {
  return (
    <div className='Gallery'>
      {props.photos.map((photo) => (
        <div className='gallery-img-container' key={photo.photo_id}>
          <img src={photo.photo_url} alt='' className='gallery-image' />
        </div>
      ))}
    </div>
  )
}

export default Gallery
