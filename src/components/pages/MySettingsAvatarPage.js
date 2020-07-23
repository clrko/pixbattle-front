import React, { Component } from 'react'
import DropDownSettings from '../shared/DropDownSettings'
import './MySettingsPage.css'
import './MySettingsAvatar.css'
import './FormLogin.css'

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

class MySettingsAvatarPage extends Component {
  state = {
    modifPseudo: ''
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    const card = imagesData.map(function (obj, ind) {
      return (
        <div className='card' key={ind}>
          <img src={obj.image} height='100px' width='100px' alt={obj.alt} />
        </div>
      )
    })

    return (
      <div>
        <DropDownSettings />
        <div className='background-PageProfileSettings'>
          <form className='register-form from-PSW-AC'>
            <div className='login-inside LoginForm-div'>
              <label className='LoginForm-label'>Modifier ton pseudo</label>
              <input
                className='LoginForm-input'
                type='text'
                alue={this.state.modifPseudo}
                onChange={this.handleChange}
                name='modifPseudo'
                minLength='3'
                maxLength='15'
                required
              />
              <div className='LoginForm-label AC-MA-margin'>Modifier ton avatar</div>
              <section className='container'>
                {card}
              </section>
            </div>
            <div>
              <input
                className='LoginForm-validateButton AC-VB-Margin'
                type='submit'
                value='Valider'
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default MySettingsAvatarPage
