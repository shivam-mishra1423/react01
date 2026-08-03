const { getUsers } = require("../model/userModel");

function handleUsers(req, res) {

    const users = getUsers();

    res.render("user", {
        users
    });
}

module.exports = { handleUsers };