import mongoose, { Schema } from 'mongoose'
import passportLocalMongoose from 'passport-local-mongoose'


const UserSchema = new Schema({
	username:{
		type: String,
		unique: true
	},
	email: {
		type: String,
		unique: true
	},
	password: String
})

UserSchema.plugin(passportLocalMongoose)

export default mongoose.model('User', UserSchema)
