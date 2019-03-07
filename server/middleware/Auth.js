// import expressJwt from 'express-jwt'

import jwt from 'jsonwebtoken'

// const requireSignIn = expressJwt({
// 			secret:'kkdkkd'
// 		})



const requireSignIn = (req,res,next) => {
	try{
		const token = req.headers.authorization.split(" ")[1]
		const decoded = jwt.verify(token, 'kkdkkd')
		req.decoded = decoded

		next()

	}catch(error) {
		return res.status(401).json({
			error: "Unauthorized Access, Please Login"
		})
	}
}

export default { requireSignIn }
