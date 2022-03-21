const express = require("express");
const router = express.Router();


const coursesControllers = require("../controllers/courses");

router.get("/get-course", coursesControllers.getCurses);
router.get("/get-curse/:numCurse", coursesControllers.getOneCurse);
router.post("/create-curse", coursesControllers.createCurses);
/* router.delete("/delete-course/", coursesControllers.deleteCourses); */
/* router.put("/update-course/:courseId", coursesControllers.updateCourses); */

module.exports = router;
