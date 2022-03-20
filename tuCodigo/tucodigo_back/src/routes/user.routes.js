const express = require("express");
const router = express.Router();


const userControllers = require("../controllers/user.controllers");

router.get("/get-user", userControllers.getUsers);
router.get("/get-one-user/:userId", userControllers.getOneUser);
router.post("/create-user", userControllers.createUsers);
router.delete("/delete-user/:userId", userControllers.deleteUser);
router.post("/login", userControllers.login);
router.put("/update-user/:userId", userControllers.updateUsers);

module.exports = router;