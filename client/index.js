import React from 'react'
import { render } from 'react-dom'

import { BrowserRouter as Router } from 'react-router-dom'
//import Bucketlist from './Bucketlist'
import App from './App'

//import Login from './components/Login'

render(
	<Router>
		<App />
	</Router>, document.getElementById('root') )

if(module.hot) {
	module.hot.accept()
}
