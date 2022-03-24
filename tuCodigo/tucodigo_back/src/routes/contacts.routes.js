const express = require("express");
const router = express.Router();

const contactsControllers =require("../controllers/contacts.controllers")
const auth = require("../middlewares/auth")

router.get("/get-request", auth,  contactsControllers.getRequest);
router.get("/get-one-request", auth, contactsControllers.getOneRequest);
router.post("/create-request", contactsControllers.createRequest);
router.put("/upDate-request/:contactId", auth, contactsControllers.upDateRequest);
router.delete("/delete-request/:_id", auth, contactsControllers.deleteRequest);

module.exports = router;
