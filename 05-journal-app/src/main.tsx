import ReactDOM from 'react-dom/client'
import AppTheme from './theme/AppTheme'
import JournalApp from './JournalApp'
import React from 'react'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppTheme>
      <JournalApp/>
    </AppTheme>
  </React.StrictMode>
)
