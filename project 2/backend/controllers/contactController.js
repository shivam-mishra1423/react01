const Contact = require("../models/Contact");


// add contact

const add = async (req, res) => {
    try {

        const { name, email, phone } = req.body;

        const contact = await Contact.create({
            name,
            email,
            phone,
            user: req.user.id,
        });

        res.status(201).json({
            message: "contact added",
            contact,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};

//get all
const getAll = async (req, res) => {
    try {

        const page = Number(req.query.page) || 1;
        const limit = Number(req.query.limit) || 5;

        const skip = (page - 1) * limit;

        const totalContacts = await Contact.countDocuments({
            user: req.user.id
        });

        const contacts = await Contact.find({
            user: req.user.id
        })
        .skip(skip)
        .limit(limit);

        res.status(200).json({
            contacts,
            currentPage: page,
            totalPages: Math.ceil(totalContacts / limit),
            totalContacts
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};


//update
const edit = async (req, res) => {
    try {

        const { name, email, phone } = req.body;

        const contact = await Contact.findOneAndUpdate(
    {
        _id: req.params.id,
        user: req.user.id,
    },
    {
        name,
        email,
        phone,
    },
    {
        new: true,
    }
);

        if (!contact) {
            return res.status(404).json({
                message: "Contact Not Found",
            });
        }

        res.status(200).json({
            message: "contact update",
            contact,
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};


// delete
const remove = async (req, res) => {
    try {


        const contact = await Contact.findOneAndDelete({
            _id :  req.params.id,
            user: req.user.id
        })

        if (!contact) {
            return res.status(404).json({
                message: "Contact Not Found",
            });
        }

        res.status(200).json({
            message: "Contact Deleted Successfully",
        });

    } catch (error) {

        res.status(500).json({
            message: error.message,
        });

    }
};






module.exports = {
    add,
    getAll,
    edit,
    remove,
};