// src/Project.js

import React from 'react'
import './POPOSSpace.css';
import { Link } from 'react-router-dom'

function POPOSSpace(props) {
  // Get the
  const { name, image, address, hours, id } = props
  return (
    <div className="POPOSSpace">
      <h1>
        <Link to={`/details/${id}`}>
          {name}
        </Link>
      </h1>
      <Link to={`/details/${id}`}>
        <img src={`${process.env.PUBLIC_URL}images/${image}`} width="300" height="300" alt="Hello" />
      </Link>
      <div>{address}</div>
      <div>{hours}</div>
    </div>
  )

  return (
    <div>
      <img src={`${process.env.PUBLIC_URL}images/50-california-st.jpg`} width="300" height="300" alt="Hello" />
      <h1>Name...</h1>
      <div>Address...</div>
      <div className="Hours">Hours...</div>
    </div>
  )

}

export default POPOSSpace
