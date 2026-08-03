const STATUS_CODES = require("../constants/statusCodes.constant");
const sendResponse = require("../utils/response")

const validate = (schema) =>{
    return (req,res,next)=>{
        const {error}  = schema.validate(req.body);

        if(error){
            return sendResponse({
                res,
                statusCode : STATUS_CODES.BAD_REQUEST,
                success : false,
                message : error.details[0].message,
            });
        }

        next();
    }
}

module.exports = validate;