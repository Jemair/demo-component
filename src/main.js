import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'
import App from 'playground'
import { hot } from 'react-hot-loader'

const APP = hot(module)(App)

ReactDOM.render(
  <APP />,
  document.getElementById('root')
)
