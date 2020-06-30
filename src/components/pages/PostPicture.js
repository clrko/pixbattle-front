import React from 'react'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import Countdown from 'react-countdown'
// import ImageUploader from 'react-images-upload';
import './PostPicture.css'

class PostPicture extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pictures: [],
      uploadPicture: CloudUpload
    }
    this.onDrop = this.onDrop.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (event) {
    this.setState({
      uploadPicture: URL.createObjectURL(event.target.files[0])
    })
  }

  onDrop (picture) {
    this.setState({
      pictures: this.state.pictures.concat(picture)
    })
  }

  render () {
    return (
      <div>
        <Countdown className='countdown' date={Date.now() + 100000} />
        {/* <ImageUploader
                withIcon={false}
                buttonText='Upload'
                onChange={this.onDrop}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
            /> */}
        <div className='uploadPicture'>
          <img className='picture' src={this.state.uploadPicture} alt='user-avatar' type='file' onChange={this.handleChange} />
          <input className='file' type='file' onChange={this.handleChange} />
        </div>
        <button onClick={() => this.saveStateToLocalStorage} avatar={this.state.uploadPicture}>
            Envoyer
        </button>
      </div>
    )
  }
}

export default PostPicture
