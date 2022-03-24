const express = require("express");
const router = express.Router();


/* const coursesControllers = require("../controllers/courses.controllers"); */
const coursesControllers = require("../controllers/courses");
const auth = require("../middlewares/auth")

/* router.get("/get-course", coursesControllers.getCourses);
router.get("/get-one-course", coursesControllers.getOneCourses);
router.post("/create-course", auth, coursesControllers.createCourse);
router.delete("/delete-course/:courseId", auth, coursesControllers.deleteCourses);
router.put("/update-course/:courseId", auth, coursesControllers.updateCourses);
 */

router.get("/get-course", coursesControllers.getCurses);
router.get("/get-curse/:numCurse", coursesControllers.getOneCurse);
router.post("/create-curse", auth, coursesControllers.createCurses);
router.delete("/delete-course/", auth, coursesControllers.deleteCourses);
router.put("/update-course/:courseId", auth, coursesControllers.updateCourses); 

module.exports = router;
