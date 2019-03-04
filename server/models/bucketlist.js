import mongoose, { Schema } from 'mongoose'
const ObjectID = Schema.ObjectID

const BucketSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	items: [{type: ObjectID, ref: Item}],
	date_created: new Date(),
	date_modified: new Date(),
	created_by:{
		type: String,
		required: true
	}

})

mongoose.model('Bucket', BucketSchema)

export default Bucket
