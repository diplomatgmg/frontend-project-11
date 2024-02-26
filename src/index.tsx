import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './i18n'
import { Provider } from 'react-redux'
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
