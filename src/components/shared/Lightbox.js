import React, { useState } from 'react'
// import axios from 'axios'
import './Lightbox.css'

const Lightbox = ({ photos }) => {
  const [dispImg, setDisp] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [cardIndex, setIndex] = useState(0)
  const [dispImgStyle, setStyle] = useState({ display: 'none' })
  const [vote, setVote] = useState({ photoId: '', vote: '' })
  const [allVotes, setAllVotes] = useState([])

  const showPhotoUrl = (event) => {
    setDisp(photos[Number(event.target.id)].photo_url)
    setIndex(Number(event.target.id))
    setStyle({ display: 'flex' })
    setPhotoId(photos[Number(event.target.id)].photo_id)
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

  const card = photos.map((obj, ind) => {
    return (
      <div className='gallery-img-container' key={obj.photo_id}>
        <img src={obj.photo_url} onClick={showPhotoUrl} id={ind} alt='' className='gallery-image' />
      </div>
    )
  })

  const getVote = e => {
    e.preventDefault()
    setVote({ photoId: photoId, vote: e.target.value })
    setAllVotes(allVotes => [...allVotes, vote])
    console.log(allVotes)
  }

  return (
    <>
      <section className='Gallery'>
        {card}
      </section>
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
        <div className='btn-vote-container'>
          <label className='label-vote'>
            <input
              type='radio'
              value='1'
              checked={vote === '1'}
              onChange={getVote}
              id='one'
              name='one'
              className='input-vote'
            />
            <div className='stars-container'>
              <i className='fas fa-star' />
            </div>
          </label>
          <label className='label-vote'>
            <input
              type='radio'
              value='2'
              checked={vote === '2'}
              onChange={getVote}
              id='two'
              name='two'
              className='input-vote'
            />
            <div className='stars-container'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
            </div>
          </label>
          <label className='label-vote'>
            <input
              type='radio'
              value='3'
              checked={vote === '3'}
              onChange={getVote}
              id='three'
              name='three'
              className='input-vote'
            />
            <div className='stars-container'>
              <i className='fas fa-star' />
              <i className='fas fa-star' />
              <i className='fas fa-star' />
            </div>
          </label>
        </div>
      </section>
    </>
  )
}

export default Lightbox
