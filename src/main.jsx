import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './app/Store'
import './index.css';
import { Toaster } from 'react-hot-toast'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <Toaster position='top-center' reverseOrder={false} />
      <App />
    </Provider>
  </React.StrictMode>,
)
