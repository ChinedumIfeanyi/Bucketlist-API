import React from 'react'
import { Link } from 'react-router-dom'


const Header = () =>
	<div>
		<Link to="/auth/login"> Login </Link>
		<Link to="/auth/register">Register</Link>
		<Link to="/api/v1/bucketlists"> Buckets </Link>
	</div>

export default Header
