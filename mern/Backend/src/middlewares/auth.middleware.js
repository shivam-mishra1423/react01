const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/env");

const AppError = require("../errors/AppError");

const STATUS_CODES = require("../constants/statusCodes");
const MESSAGES = require("../constants/messages");

const authMiddleware = (req, res, next) => {

    try {

        const authHeader = req.headers.authorization;

        if (!authHeader) {

            throw new AppError(
                MESSAGES.TOKEN_REQUIRED,
                STATUS_CODES.UNAUTHORIZED
            );

        }

        const token = authHeader.split(" ")[1];

        const decoded = jwt.verify(
            token,
            JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (error) {

        next(error);

    }

};

module.exports = authMiddleware;