import mongoose, { Schema } from 'mongoose'


const ItemSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	done: {
		type: Boolean,
		default: false
	}
},{
	timestamps: true
})

export default mongoose.model('Item', ItemSchema)


