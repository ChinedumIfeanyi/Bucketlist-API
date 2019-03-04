import Item from '../models/item'
import Bucket from '../models/bucketlist'

class BucketListItemCtrl {

	//get a single item attached to a bucket
	static ItemId(req,res,next,id) {
		Item.findById(id)
		.then(data =>{
			req.item = data
			next()
		})
		.catch(error =>{
			return res.status('400').json({
				error: 'Item not found'
			})
		})
	}

	//read all items from a single bucket
	static readAllItems(req,res) {
		const id = req.bucket.id
		Bucket.findById(id).populate('items').exec()
		.then(result => {
			return res.status(200).json({
				response: result.items
			})
		})
	}

	//create an item for a bucketlist
	static CreateAnItem(req,res) {
		const id = req.bucket.id
		Bucket.findById(id)
		.then(bucket => {
			const name = req.body.name
			const done = req.body.done

			const item = new Item()
			item.name = name
			item.done = done

			//save item
			item.save()
			.then((item)=>{
				//push items to bucket
				bucket.items.push(item)
				//save bucket
				bucket.save()
				//return response
				res.status(200).json({
					message: "Item saved"
				})
			})
			.catch(error=>{
				res.json({
					error: "Item connot be saved"
				})
			})
		})

	}

	//get single bucket item
	static getSingleBucketItem(req,res) {
		return res.status(200).json({
			response: req.item
		})
	}

	//update single bucket item
	static updateSingleBucketItem(req,res) {

		const item = req.item

		//update item
		item.name = req.body.name
		item.done = req.body.done

		//save item
		item.save()
		.then(()=>{
			return res.json({
				message: 'Item Updated'
			})
		})
		.catch(error =>{
			return res.json({
				error: "Item cannot be updated, Please try again"
			})
		})
	}

	//delete a single bucket item
	static deleteSingleBucketItem(req,res) {

		const item = req.item
		Item.findByIdAndRemove(item.id)
		.then(()=>{
			return res.json({
				message: 'Item deleted successfully'
			})
		})
		.catch(error =>{
			return res.json({
				error: 'Item cannot be deleted'
			})
		})

	}

}

export default BucketListItemCtrl
