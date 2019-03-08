import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router  } from 'react-router-dom'
import App from './App'

const Mount = document.getElementById('root')
render(
	<Router>
		<App />
	</Router>, Mount
)

if(module.hot) {
	module.hot.accept()
}
