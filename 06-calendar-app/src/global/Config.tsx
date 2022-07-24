import { BrowserRouter } from 'react-router-dom'
import React from 'react'

const GlobalHoc = ({ children } : any ) => {
  return (
    <BrowserRouter>
        { children }
    </BrowserRouter>
  )
}

export default GlobalHoc