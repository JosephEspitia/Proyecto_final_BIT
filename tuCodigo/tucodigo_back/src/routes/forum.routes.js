const express = require("express");
const router = express.Router();

const forumControllers = require("../controllers/forum.controllers");

router.get("/get-forum", forumControllers.getForum);
router.post("/create-forum", forumControllers.createForum);
router.delete("/delete-forum/:forumId", forumControllers.deleteForum);
router.put("/update-forum/:forumId", forumControllers.updateForum)
router.put("/update-answer/:forumId", forumControllers.updateAnswer)
router.get("/get-one-forum/:forumId", forumControllers.getOneForum)

module.exports = router;