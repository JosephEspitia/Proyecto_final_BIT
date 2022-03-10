const express = require("express");
const router = express.Router();

const contactsControllers =require("../controllers/contacts.controllers")

router.get("/get-request", contactsControllers.getRequest);
router.get("/get-one-request", contactsControllers.getOneRequest);
router.post("/create-request", contactsControllers.createRequest);

module.exports = router;
