const authService = require("../services/auth.service");

const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const sendResponse = require("../utils/response");

const register = async (req, res, next) => {
    try {

        const user = await authService.registerUser(req.body);

        sendResponse({
            res,
            statusCode: STATUS_CODES.CREATED,
            success: true,
            message: MESSAGES.USER_REGISTERED,
            data: user,
        });

    } catch (error) {
        next(error);
    }
};

const login = async (req, res, next) => {
    try {

        const result = await authService.loginUser(
            req.body.email,
            req.body.password
        );

        sendResponse({
            res,
            statusCode: STATUS_CODES.OK,
            success: true,
            message: MESSAGES.LOGIN_SUCCESS,
            data: result,
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    register,
    login,
};