// src/components/AppointmentItem/index.js

import React from 'react'

const AppointmentItem = ({appointment}) => {
  const {title, date, starred} = appointment

  return (
    <li>
      <div>
        <p>{title}</p>
        <p>{date}</p>
      </div>
      <button data-testid="star">
        <img
          src={starred ? 'filled-star-img.png' : 'star-img.png'}
          alt="star"
        />
      </button>
    </li>
  )
}

export default AppointmentItem
