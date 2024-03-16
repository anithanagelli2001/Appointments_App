// src/components/Appointments/index.js

import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import {format} from 'date-fns'
import AppointmentItem from '../AppointmentItem'

const Appointments = () => {
  const [appointments, setAppointments] = useState([])
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')

  
  const handleTitleChange = event => {
    setTitle(event.target.value)
  }

  const handleDateChange = event => {
    setDate(event.target.value)
  }

  const handleAddAppointment = () => {
    if (title.trim() !== '' && date.trim() !== '') {
      const newAppointment = {
        id: uuidv4(),
        title,
        date,
        starred: false,
      }
      setAppointments([...appointments, newAppointment])
      setTitle('')
      setDate('')
    }
  }

  

  return (
    <div>
      <h1>Add Appointment</h1>
      <label htmlFor="title">Title:</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={handleDateChange} />
      <button onClick={handleAddAppointment}>Add</button>
      <img src="appointments-img.png" alt="appointments" />
      <h1>Appointments</h1>
      
      <ul>
        {appointments.map(appointment => (
          <AppointmentItem key={appointment.id} appointment={appointment} />
        ))}
      </ul>
    </div>
  )
}

export default Appointments
