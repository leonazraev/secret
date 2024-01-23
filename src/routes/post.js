import express from 'express'
import {createPostController, getPostController, getPostsAmountController} from "../controllers/post.js";
import {measureRequestDuration} from "../middleware/middleware.js";
import {createPostSchema, getPostsSchema} from "./schema.js";

const router = express.Router();

router.get("/posts",measureRequestDuration ,getPostsSchema,getPostController)
router.post("/posts",measureRequestDuration , createPostSchema ,createPostController)
router.get("/postsnumber",getPostsAmountController)


export default router