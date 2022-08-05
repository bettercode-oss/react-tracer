import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import * as BetterTracer from '@bettercode/react-tracer'
BetterTracer.init({
  dsn: 'http://localhost:8080'
})


ReactDOM.render(<App />, document.getElementById('root'))
