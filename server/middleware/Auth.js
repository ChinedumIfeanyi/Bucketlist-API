import expressJwt from 'express-jwt'


const requireSignIn = expressJwt({
			secret:'kkdkkd'
		})



export default { requireSignIn }
