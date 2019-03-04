import { Router } from "express"

const bucketRoute = Router()


//controllers
import BucketListCtrl from "../controllers/BucketListCtrl"
import BucketListItemCtrl from "../controllers/BucketListItemCtrl"

bucketRoute.route("/")
	.get( BucketListCtrl.readAll )
	.post( BucketListCtrl.Create )

bucketRoute.param('id', BucketListCtrl.BucketId )

bucketRoute.route("/:id")
	.get( BucketListCtrl.getSingleBucket )
	.put( BucketListCtrl.updateSingleBucket )
	.delete( BucketListCtrl.deleteSingleBucket )


//Get a single item from bucketlist
bucketRoute.param("itemId", BucketListItemCtrl.ItemId)

bucketRoute.route("/:id/items")
	.get( BucketListItemCtrl.readAllItems )
	.post( BucketListItemCtrl.CreateAnItem )

bucketRoute.route("/:id/items/:itemId")
	.get( BucketListItemCtrl.getSingleBucketItem )
	.put( BucketListItemCtrl.updateSingleBucketItem )
	.delete( BucketListItemCtrl.deleteSingleBucketItem )


export default bucketRoute
