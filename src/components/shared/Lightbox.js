import React, { useState } from 'react'
import Photo from './Photo'
import axios from 'axios'
import classnames from 'classnames'
import './Lightbox.css'

const Lightbox = ({ photos }) => {
  const [dispImg, setDisp] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [cardIndex, setIndex] = useState(0)
  const [dispImgStyle, setStyle] = useState({ display: 'none' })
  const [vote, setVote] = useState({ photoId: '', vote: '' })
  const [allVotes, setAllVotes] = useState([])

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

  const getVote = e => {
    e.preventDefault()
    const newVote = { photoId: photoId, vote: e.target.value }
    setVote(newVote)
    const selectedVoteIndex = allVotes.findIndex(vote => {
      return vote.vote === newVote.vote
    })
    if (selectedVoteIndex !== -1 && photoId !== allVotes[selectedVoteIndex].photoId) {
      const replace = window.confirm('ce vote existe déjà, le remplacer ?')
      if (replace) {
        setAllVotes(allVotes => {
          const allVotesTemp = allVotes.filter(vote => vote.photoId !== photoId)
          allVotesTemp.splice(selectedVoteIndex, 1, newVote)
          return allVotesTemp
        })
      }
    } else {
      setAllVotes(allVotes => {
        const selectedPhotoIndex = allVotes.findIndex(vote => {
          return vote.photoId === photoId
        })
        if (selectedPhotoIndex === -1) {
          return [...allVotes, newVote]
        } else {
          const allVotesTemp = [...allVotes]
          const selectedVote = allVotes[selectedPhotoIndex].vote
          if (selectedVote === newVote.vote) {
            allVotesTemp.splice(selectedPhotoIndex, 1)
          } else {
            allVotesTemp.splice(selectedPhotoIndex, 1, newVote)
          }
          return allVotesTemp
        }
      })
    }
  }

  const handleVotes = () => {
    if (allVotes.length === 3) {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/battle-vote`,
          {
            photoId1: allVotes[0].photoId,
            vote1: allVotes[0].vote,
            photoId2: allVotes[1].photoId,
            vote2: allVotes[1].vote,
            photoId3: allVotes[2].photoId,
            vote3: allVotes[2].vote
          },
          {
            headers: {
              authorization: `Bearer ${localStorage.getItem('token')}`
            }
          })
        .then(res => console.log(res))
    } else {
      alert(`Tu dois encore voter pour ${3 - allVotes.length} photo(s) pour valider.`)
    }
  }

  const selectedPhoto = allVotes.find(vote => {
    return vote.photoId === photoId
  })

  return (
    <>
      <section className='Gallery'>
        {photos.map((photo, i) => (
          <div className='gallery-img-container' key={photo.photo_id}>
            <Photo photo={photo} handleClick={showPhotoUrl} id={i} />
          </div>
        ))}
        <button onClick={handleVotes}>valider les votes</button>
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
          <label className={classnames('label-vote', { 'label-vote-active': selectedPhoto && selectedPhoto.vote === '1' })}>
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
          <label className={classnames('label-vote', { 'label-vote-active': selectedPhoto && selectedPhoto.vote === '2' })}>
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
          <label className={classnames('label-vote', { 'label-vote-active': selectedPhoto && selectedPhoto.vote === '3' })}>
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
