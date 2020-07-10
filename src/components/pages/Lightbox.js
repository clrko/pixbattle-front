import React, { useState } from 'react'
import './Lightbox.css'

const imagesData = [
  {
    image: 'https://images.unsplash.com/photo-1593642634443-44adaa06623a',
    alt: 'img1',
    index: '0'
  },

  {
    image: 'https://images.unsplash.com/photo-1553206352-6fd0a4ae2ef8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    alt: 'img2',
    index: '2'
  },

  {
    image: 'https://images.unsplash.com/photo-1587717415723-8c89fe42c76c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img3',
    index: '3'
  },

  {
    image: 'https://images.unsplash.com/photo-1594080051162-74b97d619668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img4',
    index: '4'
  },

  {
    image: 'https://images.unsplash.com/photo-1576159600424-0a1129d00ad1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img5',
    index: '5'
  },

  {
    image: 'https://images.unsplash.com/photo-1594225258155-d1442fa3f82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img6',
    index: '6'
  },

  {
    image: 'https://images.unsplash.com/photo-1594105011432-81b594b0e3cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img7',
    index: '7'
  },

  {
    image: 'https://images.unsplash.com/photo-1590582445822-f67302414028?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    alt: 'img8',
    index: '8'
  }
]

const Lightbox = () => {
  const [dispImg, setDisp] = useState('')
  const [cardIndex, setIndex] = useState(0)
  const [dispImgStyle, setStyle] = useState({ display: 'none' })

  const showImage = (event) => {
    setDisp(imagesData[Number(event.target.id)].image)
    setIndex(Number(event.target.id))
    setStyle({ display: 'flex' })
  }

  const closeDisp = () => {
    setStyle({ display: 'none' })
  }

  const prevShow = () => {
    if (cardIndex === 0) {
      setIndex(imagesData.length - 1)
      setDisp(imagesData[imagesData.length - 1].image)
    } else {
      const d = cardIndex - 1
      setDisp(imagesData[d].image)
      setIndex(d)
    }
  }

  const nextShow = () => {
    if (cardIndex === imagesData.length - 1) {
      setIndex(0)
      setDisp(imagesData[0].image)
    } else {
      const i = cardIndex + 1
      setDisp(imagesData[i].image)
      setIndex(i)
    }
  }

  const card = imagesData.map(function (obj, ind) {
    return (
      <div className='card' key={ind}>
        <img src={obj.image} height='200px' width='200px' alt={obj.alt} onClick={showImage} id={ind} />
        {/* <div className='cardInfo'><button  >Zoom</button></div> */}
      </div>
    )
  }
  )
  return (
    <>
      <section className='container'>
        {card}
      </section>
      <section className='lightbox' style={dispImgStyle}>
        <div className='close' onClick={closeDisp}>close</div>
        <div className='carousel left' onClick={prevShow}>
          <span /><span />
        </div>
        <div className='leftArrow' />
        <div className='carousel right' onClick={nextShow}>
          <span /><span />
        </div>
        <div className='rightArrow' />
        <div>
          <img src={dispImg} alt={dispImg} />
        </div>
      </section>
    </>
  )
}

export default Lightbox
