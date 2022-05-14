import express from "express";
import { Createpost, getPosts } from "../controllers/posts.js";
const router = express.Router();

router.get("/", getPosts);
router.post("/", Createpost);
export default router;
