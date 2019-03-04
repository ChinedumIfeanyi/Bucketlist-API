import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

//Routes
import Route from "./routes"

//database connection
mongoose.connect(
	'mongodb://localhost/bucketapi',
	{useNewUrlParser: true}
)

const PORT = process.env.NODE_ENV || 7500
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: false
}))


//Bucketlist Middleware
app.use("/bucketlists", Route.bucketRoute)


app.listen(PORT, ()=> console.log(`app starting @ ${PORT}`))
