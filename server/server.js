import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import passport from 'passport'
import Session from 'express-session'
import cors from 'cors'
import helmet from 'helmet'

//passport startegy
import Strategy from 'passport-local'

//user model
import User from './models/user'

//Routes
import Route from "./routes"


//database connection
mongoose.connect(
	'mongodb://localhost/bucketapi',
	{useNewUrlParser: true}
).then(()=> console.log('db connected'))
.catch(error => console.log(error))

const PORT = process.env.NODE_ENV || 7500
const app = express()
app.use(cors() )
app.use(helmet() )
app.use(bodyParser.json() )
app.use(bodyParser.urlencoded({
	extended: false
}) )
app.use(Session({
	saveUninitialized: false,
	resave: false,
	secret: 'kkdkkd'
}) )
app.use(passport.initialize() )
app.use(passport.session() )

passport.serializeUser(User.serializeUser() )
passport.deserializeUser(User.deserializeUser() )

passport.use(new Strategy(User.authenticate() ))

//Bucketlist Middleware
app.use("/api/v1/bucketlists", Route.bucketRoute)
app.use("/auth", Route.userRoute)

app.listen(PORT, ()=> console.log(`app starting @ ${PORT}`))
