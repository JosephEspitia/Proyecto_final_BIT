const express = require("express");
const router = express.Router();


const userControllers = require("../controllers/user.controllers");
const auth = require("../middlewares/auth")

router.get("/get-user", auth, userControllers.getUsers);
router.get("/get-one-user/:_id", auth, userControllers.getOneUser);
router.post("/create-user", userControllers.createUsers);
router.delete("/delete-user/:userId", auth, userControllers.deleteUser);
router.post("/login", userControllers.login);
router.put("/update-user/:userId", auth, userControllers.updateUsers);

module.exports = router;