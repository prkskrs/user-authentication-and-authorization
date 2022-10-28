import express from "express"
const router = express.Router()

// product controllers
import {testProduct} from "../controllers/productController.js"

// product routes
router.route("/testProduct").post(testProduct)

export default router;