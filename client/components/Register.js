import React, { Component } from 'react'
import  { Redirect } from 'react-router-dom'

import Auth from '../user-api/auth'

class Register extends Component {

	constructor(props) {
		super(props)

		this.state = {
			redirect: false,
			error: "",
			email: "",
			password: "",
			username: ""
		}

		this.submitForm = this.submitForm.bind(this)
		this.handleChange = this.handleChange.bind(this)

	}
	componentDidMount() {
		console.log('registering')
	}

	//handle form input change event
	handleChange(e){
		this.setState({[e.target.name]: e.target.value})
	}

	submitForm(){
		console.log('submitting')
		const user = {
			username: this.state.username,
			email: this.state.email,
			password: this.state.password
		}
		Auth.signUp(user).then(data => {
			if(data.error){
				this.setState({ error: data.error })
			}else{
				this.setState({ redirect: true })
			}
		})
	}

	render() {
		const email = this.state.email
		const password = this.state.password
		const username = this.state.username

		//user registration success
		if( this.state.redirect ){
			return <Redirect to="/auth/login" />
		}else{

			//render register page
			return (
				<div>
				<p> {this.state.error} </p>


				<form action="" method='POST' onSubmit={ this.submitForm }>
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
}

export default Register
