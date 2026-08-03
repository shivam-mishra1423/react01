const express = require("express");

const app = express();

app.get("/", (req, res) => {

    const users = ["shivam", "munnu", "rohan", "mohan"];

    let list = "";

    for (let i = 0; i < users.length; i++) {
        list += `<li>${users[i]}</li>`;
    }

    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Users</title>
        </head>
        <body>

            <h2>User List</h2>

            <ul>
                ${list}
            </ul>

        </body>
        </html>
    `);

});

app.listen(3200, () => {
    console.log("Server running on port 3200");
});