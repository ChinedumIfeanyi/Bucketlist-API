import mongoose, { Schema } from 'mongoose'
const ObjectId = Schema.ObjectId

const BucketSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	items: [{type: ObjectId, ref: 'Item'}],
	created_by:{
		type: String,
		required: true
	}
}, {
	timestamps: true
})

export default mongoose.model('Bucket', BucketSchema)

