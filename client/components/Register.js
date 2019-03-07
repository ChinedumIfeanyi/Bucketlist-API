import React, { Component } from 'react'

import Auth from '../user-api/auth'

class Register extends Component {

	constructor(props) {
		super(props)

		this.state = {
			email: "",
			password: "",
			username: ""
		}

		this.Submit = this.Submit.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}
	componentDidMount() {
		console.log('mounting')
	}

	//handle form input change event
	handleChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	Submit(){
		const user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		}
		Auth.signUp(user).then(data => {
			if(data.error){
				console.log(data.error)
			}else{
				console.log(data)
			}
		})
	}

	render() {
		const email = this.state.email
		const password = this.state.password
		const username = this.state.username
		return (
			<div>

			<form action="/auth/register" method='POST' onSubmit={this.Submit}>
				<div>
					<label> Username </label>
					<div>
						<input onChange={ this.handleChange } value={username} type="text" name="username"  />
					</div>
				</div>
				<div>
					<label> Email </label>
					<div>
						<input onChange={ this.handleChange } value={email} type="email" name="email"  />
					</div>
				</div>
				<div>
					<label> Password </label>
					<div>
						<input onChange={ this.handleChange } value={password} type="password" name="password"  />
					</div>
				</div>

				<div>
					<input type="submit" value="Register" />
				</div>

			</form>

			</div>
		)
	}
}

export default Register
