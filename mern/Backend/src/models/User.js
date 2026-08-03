const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name:{
            type : String,
            required : [true, "Name is required"],
            trim : true,
            minlengrth :3,
            maxlength : 50,
        },

        email : {
            tyep : String,
            required : [true, "Email is required"],
            trim : true,
            lowercase :true,
            unique : true,
        },

        password : {
            type : String,
            required : [true, "password is required"],
            minlength : 6,
            select : false,
        },
    },
    {
        timestapms : true,
    }
)


module.exports  = mongoose.model("User",userSchema);