import React from 'react'
import { Link } from 'react-router-dom'


const Header = () =>
	<div>
		<Link to="/"> Home </Link>
		<Link to="/api/v1/bucketlists"> Buckets </Link>
		<Link to="/auth/login"> Login </Link>
		<Link to="/auth/register">Register</Link>
	</div>

export default Header
