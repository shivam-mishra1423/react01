const contactService = require("../services/contact.service");

const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const sendResponse = require("../utils/response");

const addContact = async (req, res, next) => {
    try {

        const contact = await contactService.addContact({
            ...req.body,
            user: req.user.id,
        });

        sendResponse({
            res,
            statusCode: STATUS_CODES.CREATED,
            success: true,
            message: MESSAGES.CONTACT_CREATED,
            data: contact,
        });

    } catch (error) {
        next(error);
    }
};

const getContacts = async (req, res, next) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const result = await contactService.getAllContacts(
            req.user.id,
            page,
            limit
        );

        sendResponse({
            res,
            statusCode: STATUS_CODES.OK,
            success: true,
            message: "Contacts fetched successfully.",
            data: result,
        });

    } catch (error) {
        next(error);
    }
};

const updateContact = async (req, res, next) => {
    try {

        const contact = await contactService.editContact(
            req.params.id,
            req.user.id,
            req.body
        );

        sendResponse({
            res,
            statusCode: STATUS_CODES.OK,
            success: true,
            message: MESSAGES.CONTACT_UPDATED,
            data: contact,
        });

    } catch (error) {
        next(error);
    }
};

const deleteContact = async (req, res, next) => {
    try {

        await contactService.removeContact(
            req.params.id,
            req.user.id
        );

        sendResponse({
            res,
            statusCode: STATUS_CODES.OK,
            success: true,
            message: MESSAGES.CONTACT_DELETED,
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    addContact,
    getContacts,
    updateContact,
    deleteContact,
};