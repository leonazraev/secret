import express from 'express'
import {getStatisticRuntimeController, getTopCreatorController} from "../controllers/statistic.js";

const router = express.Router();

router.get("/topcreators", getTopCreatorController)
router.get("/runtimes", getStatisticRuntimeController)

export default router