import React from 'react'
import { Link } from 'react-router-dom'

import './Header.css'


const Header = () =>
	<div className="links">
		<Link className="link" to="/"> Home </Link>
		<Link className="link" to="/api/v1/bucketlists"> Buckets </Link>
		<Link className="link" to="/auth/login"> Login </Link>
		<Link className="link" to="/auth/register">Register</Link>
	</div>

export default Header
