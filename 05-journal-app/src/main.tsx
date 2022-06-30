import ReactDOM from 'react-dom/client'
import AppTheme from './theme/AppTheme'
import { Provider } from 'react-redux'
import JournalApp from './JournalApp'
import { store } from './store'
import React from 'react'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppTheme>
        <JournalApp/>
      </AppTheme>
    </Provider>
  </React.StrictMode>
)
