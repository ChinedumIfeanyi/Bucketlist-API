import express from 'express'

//Routes
import Route from "./routes"


const PORT = process.env.NODE_ENV || 7500
const app = express()

//Bucketlist Middleware
app.use("/bucketlists", Route.bucketRoute)


app.listen(PORT, ()=> console.log(`app starting @ ${PORT}`))
