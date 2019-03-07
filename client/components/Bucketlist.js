import React, { Component } from 'react';
// import './App.css';

import Bucket from '../bucket-api/Bucket.js'

class Bucketlist extends Component {
	constructor(props) {
		super(props);

	}
	componentDidMount() {
		console.log('Bucketlist')
		Bucket.allBucket().then(data =>{
			console.log(data)
			if(data.error) {
				console.log(data.error)
			}else{
				console.log(data)
			}
		})
	}
	render() {
		return (
			<div></div>
		)

	}
}

export default Bucketlist;
