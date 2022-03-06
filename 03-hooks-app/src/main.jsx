// import MultipleHooks from './components/03-custom-hooks/MultipleHooks'
// import FormWithHook from './components/02-useEffect/FormWithHook'
// import CounterHook from './components/01-useState/counterHook'
// import Simpleform from './components/02-useEffect/Simpleform'
// import CounterApp from './components/01-useState/counterApp'
// import FocusScreen from './components/04-useRef/FocusScreen'
// import RealExample from './components/04-useRef/RealExample'
// import RealExample from './components/05-useLayoutEffect'
// import RealExample from './components/06-memo'
// import RealExample from './components/07-useMemo'
// import RealExample from './components/08-useReducer'
import RealExample from './components/09-useContext/Router'
import ReactDOM from 'react-dom'
import React from 'react'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <main className="">
      <RealExample />
    </main>
  </React.StrictMode>,
  document.getElementById('root')
)
