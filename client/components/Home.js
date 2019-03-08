import React, { Component } from 'react';
// import './App.css';

import Bucket from '../bucket-api/Bucket.js'

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			error: '',
			message: '',
			response: []
		}

	}

	componentDidMount() {
		console.log('Bucketlist')
		Bucket.allBucket().then(data =>{
			console.log(data)
			if(data.error) {
				this.setState({ error: data.error})
			}else{
				console.log(data)
				this.setState({
					message: data.message,
					response: data.response
				})
			}
		})
	}

	render() {
		const message = this.state.message
		const bucket = this.state.response

		let data = ( bucket.length == 0 )
			//no bucket found or rendered from server
		  ? "No Bucket Found"

		  //bucket rendered from server
			: bucket.map(bucket => {
				return (
					<section key={ bucket._id }>
						<div>
							<h1>{ bucket.name } </h1>
							<h4> Created By: { bucket.created_by } </h4>
							<span> Created At: { new Date(bucket.createdAt).toDateString() }</span>
						</div>
					</section>
				)
			}).slice(0,1)



		return (
			<div>
				{ message }

				{ data }
			</div>
		)

	}
}

export default Home;
