const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true,
        trim : true,
    },
    email : {
        type : String,
        required : true,
        trim : true,
    },
    phone: {
        type : String,
        required : true,
        trim : true,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    }
})


const Contact = mongoose.model("Contact", contactSchema);
module.exports =Contact;