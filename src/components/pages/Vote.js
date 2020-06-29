import React, { Component } from 'react'
import Gallery from '../shared/Gallery'
import Footer from '../shared/StickyFooter'

class Vote extends Component {
  state = {
    images: [
      'https://pix10.agoda.net/hotelImages/301716/-1/fe9724d8fb4da3dd4590353bd771a276.jpg?s=1024x768',
      'https://www.gohawaii.com/sites/default/files/styles/image_gallery_bg_xl/public/hero-unit-images/11500_mauibeaches.jpg?itok=I2TvGlCa',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/beach-quotes-1559667853.jpg',
      'https://content.phuket101.net/wp-content/uploads/20160831223752/paradise-beach-1-1398x932.jpg',
      'https://www.visitcalifornia.com/sites/default/files/styles/welcome_image/public/vc_lagunabeach_st_rf_519382217_1280x640.jpg',
      'https://mybayutcdn.bayut.com/mybayut/wp-content/uploads/Palm-Tree-with-loungers-and-an-umbrella-similar-to-beaches-in-Fujairah-15.01.2020.jpg',
      'https://thumbnails.expedia.com/6ferW3vZWu0qXyQMil7jqSgoHTQ=/536x384/smart/filters:quality(60)/a.cdn-hotels.com/cos/heroimage/Miami_Beach_miamibeach_traveltips.jpg',
      'https://2486634c787a971a3554-d983ce57e4c84901daded0f67d5a004f.ssl.cf1.rackcdn.com/sandyport-beach-resort/media/Hero-home-5-mobile-new-5980fad7902ce.jpg',
      'https://assets.simpleviewinc.com/simpleview/image/upload/c_fill,h_1100,q_60,w_640/v1/clients/pismobeachca/Pismo_Visitor_Center_41_1__9b1c11f9-4608-4120-8588-9a7d204051c2.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmEfCQAdefdMcYf0KYgXGHvzkpUC8t0z7B8A&usqp=CAU',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT7MNvvs09a_vA9MK-SEGjpQ5LGG_RWoJEPPg&usqp=CAU',
      'https://www.hiltonheadisland.com/wp-content/uploads/2019/06/beachprop.jpg'
    ]
  }

  render () {
    const { images } = this.state
    return (
      <div>
        <Gallery images={images} />
        <Footer />
      </div>
    )
  }
}

export default Vote
