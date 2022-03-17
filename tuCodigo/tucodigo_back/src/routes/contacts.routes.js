const express = require("express");
const router = express.Router();

const contactsControllers =require("../controllers/contacts.controllers")

router.get("/get-request", contactsControllers.getRequest);
router.get("/get-one-request", contactsControllers.getOneRequest);
router.post("/create-request", contactsControllers.createRequest);
router.put("/upDate-request/:contactId", contactsControllers.upDateRequest);
router.delete("/delete-request/:_id", contactsControllers.deleteRequest);

module.exports = router;
