import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom/client'
import { configureStore } from '@reduxjs/toolkit'
import UserReducer  from './UserReducer.jsx'

const store = configureStore({
  reducer:{
     users: UserReducer
  }
})
ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
  <Provider store={store}>
    <App />
    </Provider>
  </StrictMode>,
)
