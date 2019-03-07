

class Bucket {

	static allBucket() {
		return fetch('/api/v1/bucketlists', {
			"method": 'GET',
			"headers": {
				"Accept": "application/json",
				"Content-Type": "application/json",
				'Authorization': "Bearer "
			}
		})
		.then(response => response.json() )
		.catch(error => console.log(error) )
	}

}


export default Bucket
