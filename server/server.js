import express from 'express'
import mongoose from 'mongoose'

//Routes
import Route from "./routes"

//database connection
mongoose.connect(
	'mongodb://localhost/bucketapi',
	{useNewUrlParser: true}
)

const PORT = process.env.NODE_ENV || 7500
const app = express()

//Bucketlist Middleware
app.use("/bucketlists", Route.bucketRoute)


app.listen(PORT, ()=> console.log(`app starting @ ${PORT}`))
