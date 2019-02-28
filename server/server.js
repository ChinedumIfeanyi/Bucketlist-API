import express from 'express'


const PORT = process.env.NODE_ENV || 7500
const app = express()



app.listen(PORT, ()=> console.log(`app starting @ ${PORT}`))
