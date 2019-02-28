import { Router } from "express"

const bucketRoute = Router()

bucketRoute.route("/")
	.get((req,res)=>{
		res.send('hello bucket')
	})
	.post((req,res)=>{

	})

bucketRoute.param('id', (req,res,next,id)=>{

})

bucketRoute.route("/bucketlists/:id")
	.get((req,res)=>{

	})
	.put((req,res)=>{

	})
	.delete((req,res)=>{

	})


export default bucketRoute
