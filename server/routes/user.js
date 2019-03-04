import { Router } from 'express'

const userRoute = Router()

import UserCtrl from '../controllers/UserCtrl'

import Auth from '../middleware/Auth'

userRoute.route('/register')
.post( UserCtrl.Register )

userRoute.route('/login')
.post( UserCtrl.SignIn )

userRoute.route("/logout")
.get( Auth.requireSignIn, UserCtrl.Logout )

export default userRoute
