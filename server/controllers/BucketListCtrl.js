import Bucket from '../models/bucketlist'

class BucketListCtrl {

	//get single bucket id
	static BucketId(req,res,next,id) {
		Bucket.findById(id)
		.then(data => {
			req.bucket = data
			next()
		})
		.catch(error => {
			return res.status('400').json({
				error: 'Bucket not found'
			})
		})
	}

	//get all bucket
	static readAll(req,res,next) {
		Bucket.find({})
		.then(data =>{
			return res.status(200).json({
				message: "Bucket Found",
				response: data
			})
		}).catch(error =>{
			return res.status('400').json({
				error: 'No bucket found'
			})
		})
	}

	//create a bucket
	static Create(req,res) {
		const name = req.body.name
		const created_by = req.body.created_by

		const bucket = new Bucket()
		bucket.name = name
		bucket.created_by = created_by

		//save bucket data
		bucket.save()
		.then(()=>{
			return res.status('200').json({
				message: "Bucket saved"
			})
		}).catch(error =>{
			return res.json({
				error: "Bucket caanot be saved"
			})
		})

	}

	//get a single bucket
	static getSingleBucket(req,res) {
		//console.log(req.bucket)
		return res.json({response: req.bucket })
	}

	//update a single bucket
	static updateSingleBucket(req,res) {
		const bucket = req.bucket
		bucket.name = req.body.name
		bucket.created_by = req.body.created_by

		bucket.save()
		.then(()=>{
			return res.json({
				message: 'Bucket Updated'
			})
		}).catch(error =>{
			return res.json({
				error: "Bucket cannot be updated, Please try again"
			})
		})
	}

	//delete a single bucket
	static deleteSingleBucket(req,res) {
		const bucket = req.bucket
		bucket.remove().then(()=>{
			return res.json({
				message: "Bucket deleted successfully"
			})
		}).catch(error =>{
			return res.json({
				error: "Bucket cannot be deleted. Please try again"
			})
		})
	}

}

export default BucketListCtrl
