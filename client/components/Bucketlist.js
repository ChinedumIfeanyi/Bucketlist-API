import React, { Component } from 'react';
import './Bucketlist.css';

import Bucket from '../bucket-api/Bucket.js'

class Bucketlist extends Component {
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
		//success
		const message = this.state.message

		//bucketdata from server
		const bucketData = this.state.response.map(bucket => {
			return (
				<section key={ bucket._id } className="buckets">
					<div>
						<h1>{ bucket.name } </h1>
						<h4> Created By: { bucket.created_by } </h4>
						<span> Created At: { new Date(bucket.createdAt).toDateString() }</span>
					</div>
				</section>
			)
		})

		return (

			<div>
				<p className = "success"> { message } </p>

				<div className="buckets">
					{ bucketData }
				</div>

			</div>

		)

	}
}

export default Bucketlist;
