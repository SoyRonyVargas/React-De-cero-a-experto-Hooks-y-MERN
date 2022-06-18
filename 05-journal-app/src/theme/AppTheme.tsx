import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from './theme'
import React from 'react'

const AppTheme = ({ children } : { children : React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
        <CssBaseline />
        { children }
    </ThemeProvider>
  )
}

export default AppTheme