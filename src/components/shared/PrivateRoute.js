import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import axios from 'axios'
import Loader from 'react-loader-spinner'
import { GET_INFOS } from '../../store/action-types'
import Navbar from './Navbar'
import StickyFooter from './StickyFooter'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const mapStateToProps = state => {
  const { user, profileInfos } = state
  return { user, profileInfos }
}

const PrivateRoute = ({ user, component: Component, dispatch, profileInfos, ...rest }) => {
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_URL}/profile`,
        {
          headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
      .then(res => {
        dispatch({ type: GET_INFOS, ...res.data })
      })
  }, [])

  return (
    <Route
      {...rest}
      render={props => {
        if (!user) {
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location }
              }}
            />
          )
        }
        if (!profileInfos) {
          return (
            <div style={{ width: 'auto', margin: 'auto', textAlign: 'center' }}>
              <Loader type='ThreeDots' color='#00BFFF' height={80} width={80} />
            </div>
          )
        }
        return (
          <>
            <Navbar />
            <Component {...props} />
            <StickyFooter />
          </>
        )
      }}
    />
  )
}

export default connect(mapStateToProps)(PrivateRoute)
