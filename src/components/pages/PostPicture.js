import React from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import CloudUpload from '../../asset/pictures/cloud-computing.png'
// import Countdown from 'react-countdown'
import DropDown from '../shared/DropDown'
import Navbar from '../shared/Navbar'
import StickyFooter from '../shared/StickyFooter'
import './PostPicture.css'
import './MyProfile.css'

const Menu = withRouter(DropDown)

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
      file,
      loaded: 0
    })
  }

  handleClick = () => {
    const data = new FormData()
    data.append('file', this.state.file)
    axios.post('http://localhost:4242/battle-post/addpicture', data, {
      // receive two    parameter endpoint url ,form data
    })
      .then(res => { // then print response status
        console.log(res.statusText)
      })
  }

  render () {
    return (
      <div className='background-MyProfile'>
        <Navbar />
        <Menu />
        <div className='window-MyProfile'>
          <div className='countdown'>
            {/* <Countdown date={Date.now() + 100000} /> */}
          </div>
          <img className='picture' src={this.state.selectedFile} alt='preview-picture' />
          <input type='file' name='file' onChange={this.handleChange} />
          <button className='upload-ButtonPostpicture' type='button' onClick={this.handleClick}>Upload</button>
        </div>
        <StickyFooter />
      </div>
    )
  }
}

export default PostPicture
