

class Bucket {

	static listBucket() {
		return fetch('/api/v1/bucketlists', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			}
		})
		.then(response => response.json() )
		.catch(error => console.log(error) )
	}

}


export default Bucket
