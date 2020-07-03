import React from 'react'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
import Countdown from 'react-countdown'
import './PostPicture.css'
import axios from 'axios'

class PostPicture extends React.Component {
    state = {
      previewPicture: CloudUpload,
      selectedFile: CloudUpload
    }

    //   getGroupInfo = () => {

    //     axios.get("http://localhost:4242/battle-post/")
    //     .then (results => this.setState({}, () => console.log(this.state.)))

    // }

    // componentDidMount () {
    //     this.getGroupInfo()
    // }
    // handleAddPicture = e => {
    //   e.preventDefault()
    //     const { dispatch, history } = this.props
    //     axios.post(`${process.env.REACT_APP_SERVER_URL}/`, this.state)
    //       .then(res => {
    //         dispatch({ type: , ...res.data })
    //       })
    // }

    // handleModifyPicture = e => {
    //   e.preventDefault()
    //     const { dispatch, history } = this.props
    //     axios.put(`${process.env.REACT_APP_SERVER_URL}/`, this.state)
    //       .then(res => {
    //         dispatch({ type: , ...res.data })
    //       })
    // }

    // handleDeletePicture = e => {
    //   e.preventDefault()
    //     const { dispatch, history } = this.props
    //     axios.delete(`${process.env.REACT_APP_SERVER_URL}/`, this.state)
    //       .then(res => {
    //         dispatch({ type: , ...res.data })
    //       })
    // }

    // fileSelectHandler = (event) => {
    //   event.preventDefault()
    //   const file = event.target.files[0]
    //   this.setState({
    //     previewPicture: URL.createObjectURL(file),
    //     file: file
    //   })
    // }

    // fileUploadHandler = (e) => {
    //   e.preventDefault()
    //   const fd = new FormData()
    //   // const blob = new Blob
    //   fd.append('file', this.state.file)
    //   axios.post('http://localhost:4242/addpicture', fd, {
    //     method: 'post',
    //     body: JSON.stringify(fd),
    //     headers: { 'Content-type': 'application/json' }
    //   })
    //     .then(res => {
    //       console.log(res.status)
    //     })

    //     .catch(error => {
    //       console.log(error)
    //     })
    // }

    // fileSelectHandler = (event) => {
    //   event.preventDefault()
    //   const file = event.target.files[0]
    //   this.setState({
    //     previewPicture: URL.createObjectURL(file),
    //     file: file
    //   })
    // }

    //  {/*
    //       <div className='previewPicture'>
    //         <img className='picture' src={this.state.previewPicture} alt='preview-picture' />
    //         <input className='file' type='file' handleOnChange={this.fileSelectHandler} />
    //       </div>
    //       <button handleOnClick={this.fileUploadHandler}>
    //           Envoyer
    //       </button> */}

  handleChange = event => {
    const file = event.target.files[0]
    this.setState({
      selectedFile: URL.createObjectURL(file),
      loaded: 0
    })
  }

  handleClick = () => {
    const data = new FormData()
    data.append('file', this.state.selectedFile)
    axios.post('http://localhost:4242/battle-post/addpicture', data, {
      // receive two    parameter endpoint url ,form data
    })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
  }

  render () {
    return (
      <div>
        <div className='countdown'>
          <Countdown date={Date.now() + 100000} />
        </div>
        <img className='picture' src={this.state.selectedFile} alt='preview-picture' />
        <input type='file' name='file' onChange={this.handleChange} />
        <button type='button' class='btn btn-success btn-block' onClick={this.handleClick}>Upload</button>
      </div>
    )
  }
}

export default PostPicture
