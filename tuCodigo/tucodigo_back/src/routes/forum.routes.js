const express = require("express");
const router = express.Router();

const forumControllers = require("../controllers/forum.controllers");

router.get("/get-forum", forumControllers.getForum);
router.post("/create-forum", forumControllers.createForum);
router.delete("/delete-forum/:forumId", forumControllers.deleteForum);
router.put("update-forum/:forumId", forumControllers.updateForum)

module.exports = router;