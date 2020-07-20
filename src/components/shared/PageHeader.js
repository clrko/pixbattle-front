import React from 'react'
import './PageHeader.css'

const PageHeader = ({ pageTitle }) => (
  <div className='background-pageTitle'>
    <h1>{pageTitle}</h1>
  </div>
)

export default PageHeader
