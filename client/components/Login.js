import React, { Component } from 'react'

import Auth from '../user-api/auth'

class Login extends Component {

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
		Auth.signIn({email: 'john@gmail.com'}).then(data =>{
			console.log(data)
		})
	}

	//handle form input change event
	handleChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	Submit(){
		const user = {
			email: this.state.email,
			password: this.state.password
		}
		Auth.login(user).then(data => {
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

			<form action="/auth/login" method='POST' onSubmit={this.Submit}>

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
					<input type="submit" value="Login" />
				</div>

			</form>

			</div>
		)
	}
}

export default Login
