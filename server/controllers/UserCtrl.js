import User from '../models/user'
import passport from 'passport'
import jwt from 'jsonwebtoken'

class UserCtrl {
	static Register(req,res) {
		User.register(new User({
			username: req.body.username,
			email: req.body.email}), req.body.password, (err,user)=>{

			if(err){
				return res.json({
					error: err.message
				})
			}
			passport.authenticate('local')(req,res,()=>{
				return res.json({
					message: 'User registered'
				})
			})
		})
	}

	static SignIn(req,res) {
		// passport.authenticate('local')(req,res, ()=>{
		// 	return res.json({
		// 		message: 'User logged in'
		// 	})
		// })
		User.findOne({email: req.body.email}, (err,user)=>{
			if(err || !user) {
				return res.status('401').json({
					error: 'User not found'
				})
			}
			const token = jwt.sign({
				user: user.id,
			},'kkdkkd');
			return res.json({
				token,
				user: {email: user.email, username: user.username}
			})
		})
	}


	static Logout(req,res) {
		//logout user
		req.logout()
		return res.json({
			message: 'User logged out'
		})
	}

}

export default UserCtrl
