const express = require("express");
const router = express.Router();


const coursesControllers = require("../controllers/courses.controllers");

router.get("/get-course", coursesControllers.getCourses);
router.get("/get-one-course", coursesControllers.getOneCourses);
router.post("/create-course", coursesControllers.createCourse);
router.delete("/delete-course/:courseId", coursesControllers.deleteCourses);
router.put("/update-course/:courseId", coursesControllers.updateCourses);

module.exports = router;
