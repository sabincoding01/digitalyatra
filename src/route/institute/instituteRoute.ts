import express, { Router } from "express"
import InstituteController from "../../controller/institute/instituteController"
import middleWare from "../../middleware/middleWare"
const router:Router = express.Router() 

router.route("/").post( middleWare.isLoggedIn ,InstituteController.createInstitute)
export default router 