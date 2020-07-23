import React, { useState } from 'react'
import Photo from './Photo'
import './Lightbox.css'

const Lightbox = ({ photos, votes }) => {
  const [dispImg, setDisp] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [cardIndex, setIndex] = useState(0)
  const [dispImgStyle, setStyle] = useState({ display: 'none' })

  const showPhotoUrl = e => {
    setDisp(photos[Number(e.target.id)].photo_url)
    setIndex(Number(e.target.id))
    setStyle({ display: 'flex' })
    setPhotoId(photos[Number(e.target.id)].photo_id)
  }

  const closeDisp = () => {
    setStyle({ display: 'none' })
  }

  const prevShow = () => {
    if (cardIndex === 0) {
      setIndex(photos.length - 1)
      setDisp(photos[photos.length - 1].photo_url)
      setPhotoId(photos[photos.length - 1].photo_id)
    } else {
      const d = cardIndex - 1
      setDisp(photos[d].photo_url)
      setIndex(d)
      setPhotoId(photos[d].photo_id)
    }
  }

  const nextShow = () => {
    if (cardIndex === photos.length - 1) {
      setIndex(0)
      setDisp(photos[0].photo_url)
      setPhotoId(photos[0].photo_id)
    } else {
      const i = cardIndex + 1
      setDisp(photos[i].photo_url)
      setIndex(i)
      setPhotoId(photos[i].photo_id)
    }
  }

  if (photos.length === 0) {
    return <p>Tu n'as pas encore posté de photo</p>
  }

  // const votesForCurrentPhoto = votes.filter(vote => vote.photo_id === photoId)

  // const scoreForCurrentPhoto = votesForCurrentPhoto.reduce((sum, vote) => sum + vote.vote, 0)

  return (
    <div className='gallery-lightbox-container gallery-lightbox-container-user'>
      {
        photos &&
          <section className='Gallery'>
            {photos.map((photo, i) => (
              <div className='gallery-img-container' key={photo.photo_id}>
                <Photo photo={photo} handleClick={showPhotoUrl} id={photoId} />
              </div>
            ))}
          </section>
      }
      <section className='lightbox' style={dispImgStyle}>
        <div className='close' onClick={closeDisp}>
          <i className='fas fa-times' />
        </div>
        <div className='carousel left' onClick={prevShow}>
          <i className='fas fa-chevron-left' />
        </div>
        <div className='carousel right' onClick={nextShow}>
          <i className='fas fa-chevron-right' />
        </div>
        <div className='lightbox-img-container'>
          <img src={dispImg} alt={dispImg} className='lightbox-img' />
        </div>
        {/* {
          photos[cardIndex].avatar_url &&
            <div className='lightbox-infos-container'>
              <div className='lightbox-infos-user'>
                <p className='lightbox-infos-p'>Postée par : </p>
                <img className='lightbox-infos-user-avatar' src={photos[cardIndex].avatar_url} alt={photos[cardIndex].avatar_url} />
                <p className='lightbox-infos-span'>{photos[cardIndex].username}</p>
              </div>
              <p className='lightbox-infos-p'>Le :
                <span className='lightbox-infos-span'>{photos[cardIndex].create_date.slice(0, 10)}</span>
              </p>
              <p className='lightbox-infos-p'>Points gagnés :
                <span className='lightbox-infos-span'>+ {scoreForCurrentPhoto}</span>
              </p>
              {
                votesForCurrentPhoto.map(vote => {
                  return (
                    <div key={`${vote.photo_id}-${vote.username}`} className='lightbox-infos-user votes'>
                      <img className='lightbox-infos-user-avatar-vote' src={vote.avatar_url} alt={vote.avatar_url} />
                      <p className='lightbox-infos-span' key={vote.username}>{vote.username}</p>
                      {
                        vote.vote && new Array(vote.vote).fill(0).map((_, i) => (
                          <i key={i} className='fas fa-star' />
                        ))
                      }
                    </div>
                  )
                })
              }
            </div>
        } */}
      </section>
    </div>
  )
}

export default Lightbox
