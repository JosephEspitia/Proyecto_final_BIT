const express = require("express");
const router = express.Router();


const coursesControllers = require("../controllers/courses.controllers");
const auth = require("../middlewares/auth")

router.get("/get-course", coursesControllers.getCourses);
router.get("/get-one-course", coursesControllers.getOneCourses);
router.post("/create-course", auth, coursesControllers.createCourse);
router.delete("/delete-course/:courseId", auth, coursesControllers.deleteCourses);
router.put("/update-course/:courseId", auth, coursesControllers.updateCourses);

module.exports = router;
