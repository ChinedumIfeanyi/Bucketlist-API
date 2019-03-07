

class Auth {

	static signIn(user) {
		return fetch('/auth/login', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(response => {
			return response.json()
		})
		.catch(error => console.log(error) )
	}

	static signUp(user) {
		return fetch('/auth/register', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(user)
		})
		.then(response => response.json() )
		.catch(error => console.log(error) )
	}

}

export default Auth
