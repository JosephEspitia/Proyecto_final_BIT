const express = require("express");
const router = express.Router();

const forumControllers = require("../controllers/forum.controllers");

router.get("/get-forum", forumControllers.getForum);
router.post("/create-forum", forumControllers.createForum);
router.delete("/delete-forum/:userId", forumControllers.deleteForum);
router.put("update-forum/:userId", forumControllers.updateForum)

module.exports = router;