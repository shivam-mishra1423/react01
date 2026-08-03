const express = require("express");

const router = express.Router();

const contactController = require("../controllers/contact.controller");

const authMiddleware = require("../middlewares/auth.middleware");

const validate = require("../middlewares/validate.middleware");

const {
    contactSchema,
} = require("../validators/contact.validator");

// Add Contact
router.post(
    "/",
    authMiddleware,
    validate(contactSchema),
    contactController.addContact
);

// Get All Contacts
router.get(
    "/",
    authMiddleware,
    contactController.getContacts
);

// Update Contact
router.put(
    "/:id",
    authMiddleware,
    validate(contactSchema),
    contactController.updateContact
);

// Delete Contact
router.delete(
    "/:id",
    authMiddleware,
    contactController.deleteContact
);

module.exports = router;