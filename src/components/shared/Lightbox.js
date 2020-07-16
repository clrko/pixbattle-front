import React, { useState } from 'react'
import Photo from './Photo'
import axios from 'axios'
import classnames from 'classnames'
import './Lightbox.css'

const Lightbox = ({ photos, currentUserVotes }) => {
  const [dispImg, setDisp] = useState('')
  const [photoId, setPhotoId] = useState('')
  const [cardIndex, setIndex] = useState(0)
  const [dispImgStyle, setStyle] = useState({ display: 'none' })
  const [vote, setVote] = useState({ photoId: '', vote: '' })
  const [allVotes, setAllVotes] = useState([])
  const [numberOfVotes, setNumberOfVotes] = useState(3 - allVotes.length)

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
    const samePhotoSameVoteIdx = allVotes.findIndex(
      v => v.photoId === photoId && v.vote === newVote.vote
    )
    const samePhotoDiffVoteIdx = allVotes.findIndex(
      v => v.photoId === photoId && v.vote !== newVote.vote
    )
    const diffPhotoSameVoteIdx = allVotes.findIndex(
      v => v.photoId !== photoId && v.vote === newVote.vote
    )
    if (samePhotoSameVoteIdx !== -1) {
      setAllVotes(allVotes => {
        const nextVotes = [...allVotes]
        nextVotes.splice(samePhotoSameVoteIdx, 1)
        return nextVotes
      })
    } else if (samePhotoDiffVoteIdx !== -1) {
      const sameVoteIdx = allVotes.findIndex(
        v => v.vote === newVote.vote
      )
      if (sameVoteIdx !== -1) {
        if (window.confirm('Remplacer le vote ?')) {
          setAllVotes(allVotes => {
            const nextVotes = [...allVotes]
            nextVotes.splice(sameVoteIdx, 1)
            const samePhotoDiffVoteIdx2 = nextVotes.findIndex(
              v => v.photoId === photoId && v.vote !== newVote.vote
            )
            nextVotes.splice(samePhotoDiffVoteIdx2, 1)
            nextVotes.push(newVote)
            return nextVotes
          })
        }
      } else {
        setAllVotes(allVotes => {
          const nextVotes = [...allVotes]
          nextVotes.splice(samePhotoDiffVoteIdx, 1)
          nextVotes.push(newVote)
          return nextVotes
        })
      }
    } else if (diffPhotoSameVoteIdx !== -1) {
      if (window.confirm('Remplacer le vote ?')) {
        setAllVotes(allVotes => {
          const nextVotes = [...allVotes]
          nextVotes.splice(diffPhotoSameVoteIdx, 1)
          nextVotes.push(newVote)
          return nextVotes
        })
      }
    } else {
      setAllVotes(allVotes => [...allVotes, newVote])
      setNumberOfVotes(numberOfVotes - 1)
    }
  }

  const handleVotes = () => {
    if (allVotes.length === 3 && window.confirm('Ces choix sont définitifs, es-tu sûr-e de vouloir les valider ?')) {
      axios
        .post(`${process.env.REACT_APP_SERVER_URL}/battle/battle-vote`,
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
    return window.location.reload(true)
  }

  const selectedPhoto = allVotes.find(vote => {
    return vote.photoId === photoId
  })

  return (
    <div className='gallery-lightbox-container'>
      <section className='Gallery'>
        {photos.map((photo, i) => (
          <div className='gallery-img-container' key={photo.photo_id}>
            <Photo photo={photo} handleClick={showPhotoUrl} id={i} currentUserVotes={currentUserVotes} />
          </div>
        ))}
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
        {
          currentUserVotes.length === 0 &&
            <div>
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
              <p className='number-of-votes'>Il te reste {numberOfVotes} votes</p>
            </div>
        }
      </section>
      <div className='vote-status'>
        {
          currentUserVotes.length === 0
            ? <button onClick={handleVotes}>valider les votes</button>
            : <p>Vous ave déjà voté pour cette battle !</p>
        }
      </div>
    </div>
  )
}

export default Lightbox
