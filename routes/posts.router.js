const express = require("express")
const router = express.Router()

const postsController = require("../controller/posts.controller")

router.get("/", postsController.list)
router.get("/:id", postsController.show)
router.post("/", postsController.create)
router.put("/:id", postsController.update)
router.delete("/:id", postsController.delete)

module.exports = router