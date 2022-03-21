const express = require("express");
const router = express.Router();


const coursesControllers = require("../controllers/courses.controllers");

router.get("/get-curses", coursesControllers.getCourses);
router.get("/get-curse/:numCurse", coursesControllers.getOneCourses);
router.post("/create-curse", coursesControllers.createCourse);
/* router.delete("/delete-course/", coursesControllers.deleteCourses); */
/* router.put("/update-course/:courseId", coursesControllers.updateCourses); */

module.exports = router;
