import mongoose, { Schema } from 'mongoose'


const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	date_created: new Date(),
	date_modified: new Date(),
	done: false
})

mongoose.model('Item', ItemSchema)

export default Item
