const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {

    try {

        const authHeader = req.header("Authorization");

        if (!authHeader) {
            return res.status(401).json({
                message: "Token Not Found"
            });
        }

        

        const token = authHeader.split(" ")[1];


        const verifyToken = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = verifyToken;

        next();

    } catch (error) {

        return res.status(401).json({
            message: "Invalid Token"
        });

    }

};

module.exports = authMiddleware;