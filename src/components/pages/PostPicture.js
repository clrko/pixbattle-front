import React from 'react'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import Countdown from 'react-countdown'
import './PostPicture.css'

class PostPicture extends React.Component {
    state = {
      uploadPicture: CloudUpload
    }

    // handleSubmit = e => {
    //   e.preventDefault()
    //     const { dispatch, history } = this.props
    //     axios.post(`${process.env.REACT_APP_SERVER_URL}/`, this.state)
    //       .then(res => {
    //         dispatch({ type: , ...res.data })
    //       })
    // }

  handleChange = (event) => {
    this.setState({
      uploadPicture: URL.createObjectURL(event.target.files[0])
    })
  }

  render () {
    return (
      <div>
        <Countdown className='countdown' date={Date.now() + 100000} />
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
