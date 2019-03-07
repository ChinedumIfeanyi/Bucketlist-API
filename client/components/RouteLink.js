import React from 'react'

import {
	BrowserRouter as Router,
	Switch,
 	Route } from 'react-router-dom'

//components
import Bucketlist from './Bucketlist'
import Login from './Login'
import Register from './Register'
import App from '../App'



const RouteLink = () => {
	return (
		<Switch>
			<Route path = '/api/v1/bucketlists' component={ Bucketlist } />
			<Route path = '/auth/login' component={ Login } />
			<Route path = '/auth/register' component={ Register } />
		</Switch>

	)


}

export default RouteLink
