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

bucketRoute.route("/:id")
	.get((req,res)=>{

	})
	.put((req,res)=>{

	})
	.delete((req,res)=>{

	})


//Get a single item from bucketlist
bucketRoute.param("itemId", (req,res,next, id) =>{

})

bucketRoute.route("/:id/items")
	.get()
	.post()

bucketRoute.route("/:id/items/:itemId")
	.get()
	.put()
	.delete()


export default bucketRoute
