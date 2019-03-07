import React from 'react'
import { render } from 'react-dom'

import Bucketlist from './Bucketlist'

//import Login from './components/Login'

render(<Bucketlist />, document.getElementById('root') )

if(module.hot) {
	module.hot.accept()
}
