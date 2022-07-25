import CalendarLayout from '../layout/CalendarLayout'
import Calendar from '../components/Calendar'
import React from 'react'
import ModalEvent from '../components/Modal'

const CalendarPage = () => {
  return (
    <CalendarLayout>
      <ModalEvent/>
      <Calendar/>
    </CalendarLayout>
  )
}

export default CalendarPage