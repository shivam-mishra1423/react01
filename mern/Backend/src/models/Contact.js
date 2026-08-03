const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            reuired : [true, "Name is required"],
            trim : true,
        },
        email : {
            type : String,
            required : [true, "Email is required"],
            trim : true,
            lowercase : true, 
        },
        phone : {
            type : String,
            required : [true, "Phone number is required"],
            trim : true,
            minlength : 10,
        },

        user : {
            type: mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true,
        },
    },
    {
        timestamps : true,
    }
);

module.exports = mongoose.model("Contact", contactSchema);