import { Router } from "express"

const bucketRoute = Router()

//authentication
import Auth from '../middleware/Auth'

//controllers
import BucketListCtrl from "../controllers/BucketListCtrl"
import BucketListItemCtrl from "../controllers/BucketListItemCtrl"

bucketRoute.route("/")
	.get( BucketListCtrl.readAll )
	.post(Auth.requireSignIn, BucketListCtrl.Create )

bucketRoute.param('id', BucketListCtrl.BucketId )

bucketRoute.route("/:id")
	.get(Auth.requireSignIn, BucketListCtrl.getSingleBucket )
	.put(Auth.requireSignIn, BucketListCtrl.updateSingleBucket )
	.delete(Auth.requireSignIn, BucketListCtrl.deleteSingleBucket )


//Get a single item from bucketlist
bucketRoute.param("itemId", BucketListItemCtrl.ItemId)

bucketRoute.route("/:id/items")
	.get(Auth.requireSignIn, BucketListItemCtrl.readAllItems )
	.post(Auth.requireSignIn, BucketListItemCtrl.CreateAnItem )

bucketRoute.route("/:id/items/:itemId")
	.get(Auth.requireSignIn, BucketListItemCtrl.getSingleBucketItem )
	.put(Auth.requireSignIn, BucketListItemCtrl.updateSingleBucketItem )
	.delete(Auth.requireSignIn, BucketListItemCtrl.deleteSingleBucketItem )


export default bucketRoute
