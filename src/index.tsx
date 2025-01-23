import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@fontsource-variable/inter'
import '@fontsource-variable/source-serif-4'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}
