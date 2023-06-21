import express, {Router} from "express"

import{
    getAllBooks,
    getSingleBook,
    newBooks,
    updateBooks,
    deleteBooks
} from "../controller/bookController"

const router: Router = express.Router();

router.route("/getallbooks").get(getAllBooks);
router.route("/getsinglebook").get(getSingleBook);
router.route("/createbooks").post(newBooks);
router.route("/updatebooks").patch(updateBooks);
router.route("/deletebooks").delete(deleteBooks);

export default router