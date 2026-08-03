const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register User

const register = async (req, res) => {
    try {

        const { name, email, password } = req.body;
       console.log("Register API Hit");

        
        // check
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                message: "Email Already Exists"
            });
        }


        const hashPass = await bcrypt.hash(password,10);
        //new user
        const user = await User.create({
            name,
            email,
            password: hashPass,
        });

        res.status(201).json({
            message: "User Registered Successfully",
            user,
        });

    } catch (error) {

    console.log("Register Error:", error);

    res.status(500).json({
        message: error.message,
    });

}
};


// login user

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            });
        }

        //bycript krke he check karge 
        const matchpass = await bcrypt.compare(
            password,
            user.password
        )

        if (matchpass===false) {
            return res.status(400).json({
                message: "Invalid Password"
            });
        }

        const token = jwt.sign(
                 {
                 id: user._id,
                email: user.email,
                  },
                process.env.JWT_SECRET,
                {
                  expiresIn: "1h",
                 }
);

        res.status(200).json({
            message: "Login Successfully",
            token,
            user,
        });

    } catch (error) {
        console.log("Login Error:", error);

        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login,
};
