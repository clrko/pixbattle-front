import React from 'react'
import './Gallery.css'

const Gallery = (props) => {
  return (
    <div className='Gallery'>
      {props.images.map((img, i) => (
        <div className='gallery-img-container' key={i}>
          <img src={img} alt='' className='gallery-image' />
        </div>
      ))}
    </div>
  )
}

export default Gallery
