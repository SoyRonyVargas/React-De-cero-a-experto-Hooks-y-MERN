import Navbar from '../components/Navbar'
import React from 'react'

const CalendarLayout = ( { children } : any ) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default CalendarLayout